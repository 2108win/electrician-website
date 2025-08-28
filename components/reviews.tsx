"use client";
import { DotButton, useDotButton } from "@/components/custom/DotsCarousel";
import SectionHeader from "@/components/section-header";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DialogAppointment from "@/components/ui/dialog-appointment";
import { reviews } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  const plugin = useRef(Autoplay({ delay: 6000 }));
  return (
    <div className="bg-secondary-foreground relative flex w-full flex-col items-end">
      <div className="grid w-full justify-center justify-items-center gap-8 p-8 md:grid-cols-3 md:gap-x-14 md:p-10 xl:grid-cols-4 xl:p-16">
        <SectionHeader
          title={reviews.title}
          titleDescription={reviews.titleDescription}
          className="text-secondary row-span-1 items-start text-left md:row-span-2 xl:row-span-1"
        />
        {reviews.statistics.map((review, index) => (
          <div key={index} className="">
            <div className="text-secondary mb-2 text-3xl font-bold md:text-5xl">
              {review.value}
            </div>
            <div className="text-secondary md:text-lg">{review.label}</div>
          </div>
        ))}
      </div>
      <div className="relative flex w-full flex-col items-end justify-end overflow-hidden md:flex-row">
        <div className="bg-background z-10 flex w-full items-center justify-end px-4 py-5 md:absolute md:bottom-0 md:left-0 md:w-2/3">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="group/carousel flex h-full w-full flex-col items-center gap-4"
            opts={{
              loop: false,
            }}
          >
            <CarouselContent className="gap-4">
              {reviews.reviewList.map((data, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="group flex w-full flex-col select-none md:items-end"
                  >
                    <div className="z-10 flex w-full max-w-2xl flex-wrap justify-center gap-3 overflow-hidden p-6 md:flex-nowrap md:gap-8 md:p-16 xl:p-20">
                      <div className="relative flex size-28 shrink-0 items-center justify-center">
                        <div className="absolute -top-2 -left-2">
                          <Quote size={40} className="text-primary" />
                        </div>
                        <Image
                          src={data.image}
                          alt="Khách hàng hài lòng với dịch vụ điện dân dụng tại Manassas VA"
                          width={200}
                          height={200}
                          className="aspect-video size-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-primary text-sm font-medium">
                          {data.title}
                        </p>
                        <h4 className="text-foreground w-full text-3xl font-semibold">
                          {data.main}
                        </h4>
                        <p className="text-muted-foreground hidden text-sm text-pretty md:block">
                          {data.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm text-pretty md:hidden">
                      {data.description}
                    </p>
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
          </Carousel>
        </div>
        <div className="relative z-0 min-h-60 w-full md:min-h-[600px] md:w-2/3">
          <Image
            src="/images/reviews.jpg"
            alt="Thợ điện chuyên nghiệp - Dịch vụ điện dân dụng uy tín tại Manassas VA"
            fill
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="to-primary/80 relative flex w-full justify-end bg-gradient-to-r from-blue-900 p-10 md:p-16">
        <div className="bg-background relative z-10 max-w-2xl min-w-1/2 p-10 md:p-16 xl:p-20">
          <h3 className="before:bg-primary relative mb-8 pl-10 text-2xl font-bold before:absolute before:top-1/2 before:left-0 before:h-full before:w-2 before:-translate-y-1/2 before:content-[''] sm:text-4xl md:pl-16 md:text-5xl">
            Your <span className="text-primary">Best Option</span> in Electrical
            Contractors 24/7
          </h3>
          <p className="text-muted-foreground mb-8 font-sans text-xl">
            Our experienced electricians are highly trained in all aspects of
            electrical service, from office lighting and security systems to
            emergency repair.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <DialogAppointment buttonText="Explore Services" />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg2.jpg"
            alt="Dịch vụ điện chuyên nghiệp - Thợ điện có giấy phép tại Manassas VA"
            width={1920}
            height={1080}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
