
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    }
  ];

  return (
    <section id="showcase" className="section-container bg-gradient-to-br from-mindful-cream/50 to-mindful-green/30">
      <h2 className="heading-lg mb-8 text-center">Designed for <span className="gradient-text">Everyday Life</span></h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
        Prism is designed to be worn throughout your day, fitting seamlessly into your lifestyle
        whether worn as a bracelet or pendant.
      </p>

      <div className="max-w-5xl mx-auto">
        <Carousel className="mb-16">
          <CarouselContent>
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                  <div className="relative">
                    <AspectRatio ratio={3/4} className="bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="object-cover w-full h-full rounded-t-2xl"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductShowcase;
