
import React from "react";
import { cn } from "@/lib/utils";

interface ScrollingMarqueeProps {
  text: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const ScrollingMarquee = ({
  text,
  className,
  speed = "normal",
}: ScrollingMarqueeProps) => {
  const speedClass = {
    slow: "animate-scroll-slow",
    normal: "animate-scroll",
    fast: "animate-scroll-fast",
  };

  // Duplicate the content to create seamless scrolling effect
  const content = `${text} • ${text} • ${text} • ${text} • ${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="w-full overflow-hidden">
      <div className={cn("whitespace-nowrap inline-block", speedClass[speed], className)}>
        {content}
      </div>
    </div>
  );
};

export default ScrollingMarquee;
