
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import ScrollingMarquee from "./ScrollingMarquee";

const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1621355101933-74d0c02fde12?q=80&w=2070",
      alt: "Woman wearing Prism as a bracelet",
      title: "Prism Bracelet",
      description: "Elegant design that complements any outfit while keeping you mindful"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1590736704728-f4730bb3eb80?q=80&w=1974",
      alt: "Man wearing Prism pendant",
      title: "Prism Pendant",
      description: "Minimalist pendant design for those who prefer a necklace form factor"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1595001048286-335e054b4daa?q=80&w=1974",
      alt: "Prism being used during meditation",
      title: "Mindful Moments",
      description: "Prism integrates seamlessly into your meditation practice"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1620004626653-935df9292ad4?q=80&w=2070",
      alt: "Prism in everyday situations",
      title: "Everyday Mindfulness",
      description: "Subtle reminders throughout your day to stay present"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=2070",
      alt: "Prism charging wirelessly",
      title: "Wireless Charging",
      description: "Easy and convenient wireless charging for all-day use"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1596796389755-b84b987384d3?q=80&w=1974",
      alt: "Prism with companion app",
      title: "Companion App",
      description: "Simple and intuitive app interface to customize your Prism experience"
    }
  ];

  return (
    <section id="showcase" className="section-container bg-gradient-to-br from-mindful-cream/50 to-mindful-green/30 overflow-hidden">
      <div className="relative z-10 mb-12">
        <div className="py-3 bg-gradient-to-r from-background via-mindful-teal/20 to-background">
          <ScrollingMarquee 
            text="Designed for Everyday Life" 
            className="text-3xl md:text-4xl font-bold tracking-tight" 
            speed="normal"
          />
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mt-8 mb-12">
          Prism is designed to be worn throughout your day, fitting seamlessly into your lifestyle
          whether worn as a bracelet or pendant.
        </p>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {showcaseItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                      <CardContent className="p-0">
                        <AspectRatio ratio={4/5}>
                          <img 
                            src={item.image} 
                            alt={item.alt} 
                            className="object-cover w-full h-full rounded-t-2xl"
                          />
                        </AspectRatio>
                        <div className="p-5 bg-white">
                          <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-10 w-10" />
              <CarouselNext className="relative static right-0 translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-20 h-20 bg-mindful-blue rounded-full opacity-30 blur-lg -z-1"></div>
      <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-mindful-cream rounded-full opacity-40 blur-lg -z-1"></div>
    </section>
  );
};

export default ProductShowcase;
