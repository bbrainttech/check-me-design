import { Icons } from "./";
import { Button } from "./ui/button";

export default () => {

  return (
      <nav className="sticky top-0 h-16 bg-background/90 backdrop-blur-sm  z-50">
        <div className="box flex items-center justify-between h-full mx-auto ">
          <div className="">
            <Icons.Logo />
          </div>
            <Button
              aria-label="Download our playtore app"
              className="gap-x-2"
            >
              <Icons.PlayStore
                aria-hidden
                className="size-5"
              />
              get started
            </Button>
  
        </div>
      </nav>
    
  );
};

