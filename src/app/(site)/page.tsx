
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import MissionVision from "@/components/home/Mission";
import Activities from "@/components/home/Activities";
import Impact from "@/components/home/Impact";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/home/Projects";
import LatestNews from "@/components/home/LatestNews";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import VolunteerCTA from "@/components/home/VolunteerCTA";
import DonateCTA from "@/components/home/DonateCTA";
import ImpactSection from "@/components/home/Impact";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LatestNewsSection from "@/components/home/LatestNews";
import TestimonialsSection from "@/components/home/Testimonials";
import GallerySection from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
   
      <Hero />

      <About />

      <Impact/>

      <MissionVision />

      <Activities />

      <Impact />

      <WhyChooseSection />

      <Projects />

      <LatestNews />

      <GalleryPreview />

      <Testimonials />

      <DonateCTA />

  
    </>
  );
}