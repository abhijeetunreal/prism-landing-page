
import React from "react";
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Particles />
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Benefits />
        <DesignProcess />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
