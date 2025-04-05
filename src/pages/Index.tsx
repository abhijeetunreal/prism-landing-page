
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import ProductShowcase from "@/components/ProductShowcase";
import DesignProcess from "@/components/DesignProcess";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Particles />
      <Header />
      <main>
        <Hero />
        <div className="relative">
          <Features />
          <div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-mindful-blue/30 blur-3xl pointer-events-none"
            style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)` }}
          ></div>
        </div>
        <ProductShowcase />
        <div className="relative">
          <Benefits />
          <div 
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-mindful-teal/30 blur-3xl pointer-events-none"
            style={{ transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.02}px)` }}
          ></div>
        </div>
        <DesignProcess />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
