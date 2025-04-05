
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-lg mb-6">Our Mission</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          At Prism, we believe technology should enhance our well-being, not detract from it. 
          Our team of mindfulness experts, designers, and engineers are creating a wearable 
          device that seamlessly integrates into your life, helping you find balance in our 
          fast-paced world through subtle sensory awareness.
        </p>
        
        <div className="space-y-6">
          <div className="p-6 bg-mindful-blue/20 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Presence First</h3>
            <p className="text-muted-foreground">
              Every feature we develop is guided by the principle of present moment awareness, 
              ensuring our technology supports your mental well-being rather than adding to digital noise.
            </p>
          </div>
          
          <div className="p-6 bg-mindful-green/20 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Minimalist Design</h3>
            <p className="text-muted-foreground">
              Prism features a clean, unobtrusive design that can be worn as a bracelet or pendant, 
              complementing your style while providing powerful mindfulness support.
            </p>
          </div>
          
          <div className="p-6 bg-mindful-teal/20 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
            <p className="text-muted-foreground">
              We're committed to using eco-friendly, sustainable materials in our products and 
              packaging, minimizing our environmental footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
