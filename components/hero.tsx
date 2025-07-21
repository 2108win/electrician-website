"use client";

import { heroSlider } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlider.length);
    }, 4700); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Handle slide change with animation
  const changeSlide = (newSlide: number) => {
    if (newSlide === currentSlide || isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(newSlide);
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Increased to match image animation duration
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % heroSlider.length;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + heroSlider.length) % heroSlider.length;
    changeSlide(newSlide);
  };

  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  const currentSlideData = heroSlider[currentSlide];

  return (
    <section
      id="home"
      className="group relative h-[50svh] min-h-[400px] overflow-hidden md:h-[70svh]"
    >
      {/* Background Images with Overlay and Zoom Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlider.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`h-full w-full ${
                index === currentSlide ? "animate-imageZoomIn" : ""
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {heroSlider.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`h-3 w-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
              index === currentSlide
                ? "bg-primary/70 scale-125"
                : "bg-white/50 hover:scale-110 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Content with slide-up animation - Use key to force re-render */}
        <div
          key={currentSlide}
          className="animate-slideUpContent flex flex-col items-center gap-4 text-white select-none"
        >
          <p className="animate-slideUpDelay1 text-lg font-medium lowercase">
            {currentSlideData.title}
          </p>

          <h2 className="animate-slideUpDelay2 mb-4 max-w-3xl text-center text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            {currentSlideData.description}
          </h2>
        </div>
      </div>

      {/* Pause/Play Auto Slide Button */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white opacity-50 transition-all duration-200 hover:scale-110 hover:bg-white/30"
        aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
      >
        <span className="text-sm leading-none">{isAutoPlay ? "⏸️" : "▶️"}</span>
      </button>
    </section>
  );
}
