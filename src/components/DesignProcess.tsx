import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

const DesignProcess = () => {
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
    <section id="design" className="section-container relative overflow-hidden bg-gradient-to-br from-mindful-teal/30 to-background">
      <div className="relative z-10">
        <div 
          className="text-center max-w-3xl mx-auto mb-12"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <h2 className="heading-lg mb-4">The <span className="gradient-text">Design Process</span></h2>
          <p className="text-muted-foreground text-lg">
            Follow the journey of how Prism evolved from concept sketches to functional prototypes
          </p>
        </div>
        
        <Tabs defaultValue="sketches" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-lg mx-auto mb-8 md:grid-cols-4 bg-white/40 backdrop-blur-sm">
            <TabsTrigger value="sketches" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sketches</TabsTrigger>
            <TabsTrigger value="wireframes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Wireframes</TabsTrigger>
            <TabsTrigger value="prototypes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Prototypes</TabsTrigger>
            <TabsTrigger value="final" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Final</TabsTrigger>
          </TabsList>
          
          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <TabsContent value="sketches" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">Initial concept sketches of the Prism wearable</p>
                        <div className="h-32 w-32 bg-gradient-to-br from-primary/30 to-accent/30 mx-auto rounded-full mt-4 animate-pulse-gentle"></div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-4 text-xl">Initial Concepts</h3>
                  <p className="text-muted-foreground mt-2">Early explorations of form factor and aesthetics</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">Refined sketches with material explorations</p>
                        <div className="h-32 w-32 border-4 border-primary/40 mx-auto rounded-full mt-4 flex items-center justify-center animate-breathe">
                          <div className="h-20 w-20 bg-accent/40 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-4 text-xl">Form Refinement</h3>
                  <p className="text-muted-foreground mt-2">Exploring materials and ergonomics</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="wireframes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">Technical schematics of internal components</p>
                        <div className="h-32 w-32 border-2 border-dashed border-primary/70 mx-auto rounded-full mt-4 relative">
                          <div className="absolute inset-4 border border-primary/70 rounded-full"></div>
                          <div className="absolute inset-8 bg-accent/40 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-3">Technical Schematics</h3>
                  <p className="text-sm text-muted-foreground">Component layout and circuitry design</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">3D wireframes for structural integrity</p>
                        <div className="grid grid-cols-3 gap-2 mx-auto mt-4">
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 bg-accent/40 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                          <div className="h-8 w-8 border border-primary/70 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-3">3D Wireframes</h3>
                  <p className="text-sm text-muted-foreground">Testing structure and dimensions</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prototypes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">First functional prototype with haptic feedback</p>
                        <div className="h-32 w-32 bg-white border-4 border-primary/30 mx-auto rounded-full mt-4 shadow-lg flex items-center justify-center">
                          <div className="h-16 w-16 bg-accent animate-pulse rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-3">Alpha Prototype</h3>
                  <p className="text-sm text-muted-foreground">First working version with core functionality</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">Refined prototype with user feedback incorporated</p>
                        <div className="flex flex-col items-center mt-4">
                          <div className="h-8 w-32 bg-white border-2 border-primary/50 rounded-full mb-2"></div>
                          <div className="h-24 w-24 bg-white border-2 border-primary/50 rounded-full flex items-center justify-center">
                            <div className="h-16 w-16 bg-accent/60 rounded-full animate-breathe"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-3">Beta Prototype</h3>
                  <p className="text-sm text-muted-foreground">User testing and feedback implementation</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="final" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">The final Prism bracelet design</p>
                        <div className="h-32 w-32 bg-gradient-to-br from-primary to-accent mx-auto rounded-full mt-4 shadow-xl flex items-center justify-center animate-float">
                          <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">PRISM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-4 text-xl">Bracelet Form Factor</h3>
                  <p className="text-muted-foreground mt-2">Final production-ready bracelet design</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                  <AspectRatio ratio={4/3}>
                    <div className="flex items-center justify-center w-full h-full bg-mindful-gray rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">The final Prism pendant design</p>
                        <div className="flex flex-col items-center mt-4">
                          <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full mb-1"></div>
                          <div className="h-24 w-24 bg-gradient-to-br from-primary to-accent rounded-full shadow-xl flex items-center justify-center animate-float">
                            <div className="h-18 w-18 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">PRISM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                  <h3 className="font-medium mt-4 text-xl">Pendant Form Factor</h3>
                  <p className="text-muted-foreground mt-2">Final production-ready pendant design</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground">Production scheduled to begin in Q3 2025</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div 
        className="absolute top-20 right-0 w-32 h-32 bg-mindful-cream rounded-full opacity-30 blur-xl"
        style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-0 w-40 h-40 bg-accent/20 rounded-full opacity-30 blur-xl"
        style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.1}px)` }}
      ></div>
    </section>
  );
};

export default DesignProcess;
