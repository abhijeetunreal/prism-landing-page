
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">Serene</span>
            </a>
            <p className="text-background/80 max-w-md">
              A mindfulness wearable designed to bring balance to your daily life through 
              gentle guidance and insightful wellness tracking.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-background/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-background/70 hover:text-primary transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-background/70 hover:text-primary transition-colors">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-background/70">
                hello@serenewearable.com
              </li>
              <li className="text-background/70">
                San Francisco, CA
              </li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-background/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 mb-4 md:mb-0">
            &copy; {currentYear} Serene. All rights reserved.
          </p>
          <div className="flex items-center text-background/70">
            <span>Made with</span>
            <Heart size={16} className="text-primary mx-1" />
            <span>for mindful living</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
