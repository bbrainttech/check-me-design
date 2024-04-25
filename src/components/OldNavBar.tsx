import { ArrowRight } from "lucide-react";
import { Icons } from "./";
import { Button } from "./ui/button";

export default () => {

  return (
      <nav className="sticky top-0 h-16 bg-background/90 backdrop-blur-sm  z-50">
        <div className="box flex items-center justify-between h-full mx-auto ">
          <div className="">
            <Icons.Logo  />
          </div>
            <Button
              aria-label="Download our playtore app"
              className="gap-x-2 group transition-all duration-300 "
            >
              <Icons.PlayStore
                aria-hidden
                className="size-5 transition-all duration-300 group-hover:size-0 group-hover:opacity-0"
              />

              get started
              <ArrowRight  aria-hidden className="group-hover:size-5 transition-all duration-300 size-0" />

            </Button>
  
        </div>
      </nav>
    
  );
};

