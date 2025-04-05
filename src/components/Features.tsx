
import React from "react";
import { Heart, Vibrate, LightbulbOff, Bell, Smartphone, Moon } from "lucide-react";

const featuresList = [
  {
    icon: <Vibrate className="w-6 h-6 text-primary" />,
    title: "Haptic Feedback",
    description: "Gentle vibrations remind you to reconnect with the present moment."
  },
  {
    icon: <LightbulbOff className="w-6 h-6 text-primary" />,
    title: "Ambient Light",
    description: "Soft light cues help guide your attention without disrupting your flow."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Wellness Tracking",
    description: "Monitor your mindfulness progress and stress levels over time."
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Customizable Cues",
    description: "Set your preferred combination of haptic, light, and sound notifications."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Minimal App",
    description: "Simple companion app with no unnecessary distractions or screen time."
  },
  {
    icon: <Moon className="w-6 h-6 text-primary" />,
    title: "Sleep Support",
    description: "Optional features to help improve sleep quality through mindful transitions."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Designed for <span className="gradient-text">Present Living</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Prism combines minimalist design with subtle technology to help you 
          cultivate mindfulness without screen dependency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card"
          >
            <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
