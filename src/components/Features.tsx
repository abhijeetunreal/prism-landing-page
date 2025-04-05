
import React from "react";
import { Heart, Brain, Battery, Bell, Leaf, Moon } from "lucide-react";

const featuresList = [
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Heart Rate Variability",
    description: "Track your stress levels and recovery with precise HRV monitoring."
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Mindfulness Metrics",
    description: "Gain insights into your mental state and focus levels throughout the day."
  },
  {
    icon: <Battery className="w-6 h-6 text-primary" />,
    title: "7-Day Battery Life",
    description: "Extended battery life ensures continuous monitoring without frequent charging."
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Gentle Reminders",
    description: "Customizable notifications to help you stay mindful during your day."
  },
  {
    icon: <Leaf className="w-6 h-6 text-primary" />,
    title: "Breathing Exercises",
    description: "Guided breathing sessions to reduce stress and improve focus."
  },
  {
    icon: <Moon className="w-6 h-6 text-primary" />,
    title: "Sleep Analysis",
    description: "Advanced sleep tracking to optimize your rest and recovery."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Designed for <span className="gradient-text">Mindful Living</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our wearable combines cutting-edge technology with minimalist design to 
          help you achieve balance in your daily life.
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
