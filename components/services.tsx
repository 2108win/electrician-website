"use client";

import { DotButton, useDotButton } from "@/components/custom/DotsCarousel";
import SectionHeader from "@/components/section-header";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { callToAction, services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef, useState } from "react";
import { CallButton } from "./CallButton";
export function Services() {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  const plugin = useRef(Autoplay({ delay: 5000 }));
  const tel = callToAction.telephone;
  return (
    <section id="services" className="flex flex-col gap-20 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={services.title}
          titleDescription={services.titleDescription}
        />
        {/* Main Services Grid */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="group/carousel flex h-full w-full flex-col items-center gap-4"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="w-full">
              {services.items.map((data, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="group relative flex h-full w-full flex-col items-center sm:basis-1/2 xl:basis-1/3"
                  >
                    <div className="relative flex size-44 items-center justify-center overflow-hidden rounded-full">
                      <Image
                        src={data.image}
                        alt="img"
                        fill
                        className="absolute inset-0 object-cover brightness-50 transition-all duration-500 select-none group-hover:brightness-90"
                      />
                      {data.icon && (
                        <data.icon className="group-hover:text-primary z-10 size-20 text-white transition-all duration-500" />
                      )}
                    </div>
                    <div className="mt-4 flex flex-col items-center text-center">
                      <h4 className="text-lg font-semibold text-gray-900 select-none">
                        {data.name}
                      </h4>
                      <p className="line-clamp-2 max-w-4/5 text-sm text-balance text-gray-600 select-none">
                        {data.description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex h-5 w-full items-center justify-center gap-2">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={cn(
                    "bg-foreground/30 hover:bg-primary/30 size-3 cursor-pointer rounded-full transition-all duration-300 hover:scale-105",
                    selectedIndex === index && "bg-primary size-4",
                  )}
                />
              ))}
            </div>
            {/* <DownArt double height={30} background="white" /> */}
          </Carousel>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="to-primary/80 relative w-full bg-gradient-to-r from-blue-900 p-10 md:p-16">
        <div className="bg-background relative z-10 max-w-2xl min-w-1/2 p-10 md:p-16 xl:p-20">
          <h3 className="before:bg-primary relative mb-8 pl-10 text-2xl font-bold before:absolute before:top-1/2 before:left-0 before:h-full before:w-2 before:-translate-y-1/2 before:content-[''] sm:text-4xl md:pl-16 md:text-5xl">
            Elektrik Bakımı İçin <span className="text-primary">Yardıma</span>{" "}
            İhtiyacınız Var Mı?
          </h3>
          <p className="text-muted-foreground mb-8 font-sans text-xl">
            Elektrik onarım ve servis seçeneklerimizi müşterilerimize gururla
            sunuyoruz. Ücretsiz servis tahmini planlamak için bugün bizi arayın!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CallButton
              className="hover:bg-background hover:text-primary hover:border-primary border-1 border-transparent"
              buttonText={"Bizi Arayın"}
            />
            {/* <DialogAppointment
              buttonText="Ücretsiz Tahmin"
              className="bg-secondary-foreground text-secondary"
            /> */}
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Background"
            width={1920}
            height={1080}
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
