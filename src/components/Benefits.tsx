
import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="section-container bg-mindful-gray/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-lg mb-6">Transform your well-being with Prism</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Return to the Present</h3>
                <p className="text-muted-foreground">
                  Prism's subtle sensory cues gently pull you back from distraction to the present 
                  moment, without the jarring interruption of traditional notifications.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reduce Digital Dependency</h3>
                <p className="text-muted-foreground">
                  Break free from screen-based mindfulness tools with a wearable that 
                  works through touch and light, minimizing digital distraction.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Build Mindful Habits</h3>
                <p className="text-muted-foreground">
                  Develop lasting mindfulness practices through consistent, gentle reminders 
                  that fit seamlessly into your everyday routine.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full aspect-square rounded-full bg-gradient-to-br from-mindful-teal to-mindful-blue/50 flex items-center justify-center p-12 animate-pulse-gentle">
            <div className="w-full aspect-square bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="text-center px-8">
                <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground text-sm">
                  Prism is currently in development. Join the waitlist to be the first to know when it launches.
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-mindful-cream rounded-full opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/30 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
