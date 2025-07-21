import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Reviews from "@/components/reviews";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
