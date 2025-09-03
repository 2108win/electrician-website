"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/lib/constants";
import { ChevronLeft, ChevronRight, ScanEye } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Project = (typeof projects)[number];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openAt = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsOpen(true);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % projects.length);
  }, []);

  // Bắt phím mũi tên
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, goPrev, goNext]);

  // Khóa scroll khi mở modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const current = projects[activeIndex];

  return (
    <section id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader title="@electric.pro" titleDescription="Projelerimiz" />

        {/* Projects Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => openAt(idx)}
              className="group ring-border focus-visible:ring-primary relative aspect-square overflow-hidden rounded-xl ring-1 focus:outline-none focus-visible:ring-2"
              aria-label={`Aç: ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                priority={idx < 3}
              />
              <div className="absolute inset-0 grid place-items-center">
                <ScanEye className="h-14 w-14 scale-0 stroke-2 text-white opacity-0 drop-shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="line-clamp-1 text-sm font-medium text-white">
                  {project.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="bg-background/95 max-w-4xl border-0 p-0 shadow-2xl"
          aria-label="Proje önizleme"
        >
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="text-center text-2xl font-semibold">
              {current?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-center text-xs">
              {current ? `${activeIndex + 1} / ${projects.length}` : ""}
            </DialogDescription>
          </DialogHeader>

          <div className="relative mx-auto aspect-video w-full max-w-4xl">
            {current && (
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1280px) 90vw, 1280px"
                className="rounded-lg object-cover"
                priority
              />
            )}

            {/* Prev / Next */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="bg-background/70 hover:bg-background pointer-events-auto rounded-full backdrop-blur"
                onClick={goPrev}
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="bg-background/70 hover:bg-background pointer-events-auto rounded-full backdrop-blur"
                onClick={goNext}
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Description */}
          {current?.description && (
            <div className="px-5 pt-3 pb-5 text-center">
              <p className="text-muted-foreground text-sm">
                {current.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
