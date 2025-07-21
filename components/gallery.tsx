"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { ScanEye, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };
  const filters = [
    "All",
    "Residences",
    "Industrial Objects",
    "Offices",
    "Retail Objects",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="gallery" className="">
      {isSelected && (
        <div className="bg-foreground/50 fixed inset-0 z-50 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-50"
            onClick={() => {
              setIsSelected(false);
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </Button>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-lg"
            onClick={() => {
              setIsSelected(false);
              setSelectedImage(null);
            }}
          />
          <div className="flex flex-col gap-2">
            <Image
              src={selectedImage!}
              alt="Selected Project"
              width={400}
              height={400}
              className="z-50 h-auto max-h-96 w-fit max-w-96 object-cover"
            />
            <div className="relative flex items-center justify-between text-white">
              <p>
                {
                  filteredProjects.find(
                    (project) => project.image === selectedImage,
                  )?.title
                }
              </p>
              <span>
                {filteredProjects.indexOf(
                  filteredProjects.find(
                    (project) => project.image === selectedImage,
                  )!,
                ) + 1}{" "}
                / {filteredProjects.length}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader title="@electric.pro" titleDescription="Our Projects" />
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "hover:text-primary text-gray-700"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              className="group relative aspect-square cursor-pointer overflow-hidden"
              key={project.id}
              onClick={() => {
                setIsSelected(true);
                handleImageSelect(project.image);
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanEye className="size-16 scale-0 stroke-2 text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
