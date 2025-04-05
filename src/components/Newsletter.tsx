
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You've been added to our early access waitlist.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="section-container text-center">
        <h2 className="heading-lg mb-4">Be the first to experience Serene</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join our waitlist to get early access to our mindfulness wearable and 
          receive exclusive updates on our development progress.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-6"
          />
          <Button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
