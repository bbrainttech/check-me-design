import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/utils";
import { Button } from "./ui/button";

const MAX_SCROLL = 1500;

export default () => {
  const [isVisible, setIsvisible] = useState(window.scrollY > MAX_SCROLL);

  useEffect(() => {
    const handleScroll = () => {
      setIsvisible(window.scrollY > MAX_SCROLL);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="schroll to top button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-0 pointer-events-none make-blur z-50 border hover:bg-background shadow-lg hover:shadow-sm bottom-0 opacity-0 bg-background rounded-full transition-all duration-300 scale-0",
        { "opacity-100 pointer-events-auto bottom-6 right-6 scale-100": isVisible }
      )}
    >
      <ArrowUpFromDot className="text-primary size-5" />
    </Button>
  );
};
