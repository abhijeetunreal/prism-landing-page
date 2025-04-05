
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-mindful-teal/40 via-mindful-blue/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="heading-xl mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-[#9b87f5] bg-clip-text text-transparent">Mindful</span> living at your fingertips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Introducing Prism, the stylish wearable device designed to bring mindfulness 
              and presence to your everyday life through gentle sensory cues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-6 rounded-full font-medium transition-all duration-200">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6 rounded-full font-medium transition-colors duration-200">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative w-full h-[300px] md:h-[400px]">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 bg-mindful-teal rounded-full opacity-40 animate-breathe"></div>
            </div>
            
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-primary to-[#9b87f5] rounded-full flex items-center justify-center shadow-lg animate-float">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <span className="block text-xs md:text-sm text-primary font-medium">PRISM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">97%</h3>
            <p className="text-sm text-muted-foreground">Stress Reduction</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3+</h3>
            <p className="text-sm text-muted-foreground">Sensory Cues</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">7d</h3>
            <p className="text-sm text-muted-foreground">Battery Life</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</h3>
            <p className="text-sm text-muted-foreground">Mindfulness Support</p>
          </div>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#9b87f5] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-mindful-teal rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default Hero;
