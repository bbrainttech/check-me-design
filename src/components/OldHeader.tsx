import { Link } from "react-router-dom";
import Icons from "./Icons";
import { buttonVariants } from "./ui/button";
import { img_old_hero } from "~/assets/images";
import { ArrowRight } from "lucide-react";
import { cn } from "~/utils";

export default () => {
  return (
    <header className="mt-16 ">
      <div className="mx-auto w-full max-w-[500px] lg:max-w-[500px] box relative z-20 ">
        <h1 className="font-semibold  text-4xl sm:text-6xl lg:text-[80px] leading-[45px] lg:leading-[85px] text-center text-balance ">
          Fight <span className="text-primary">Breast Cancer</span>!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-center mt-3 text-muted">
          Connect with specialists, learn from experiences and receive breast
          cancer treatments
        </p>
        <div className="flex flex-col items-center">
          <Link
            to={""}
            className={cn(buttonVariants({
              variant: "default",
              className:
                "gap-x-2 px-2 group transition-all duration-300 whitespace-break-spaces text-base font-medium mt-5",
            }))}
          >
            <Icons.PlayStore className="size-5 transition-all duration-300 group-hover:size-0 group-hover:opacity-0" />
            Download from Google Play Store{" "}
            <ArrowRight className="group-hover:size-5 transition-all duration-300 size-0" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center reveal-zoom ">
        <div className="relative aspect-square  w-full sm:max-w-[50rem] sm:-top-20">
          <img
            src={img_old_hero}
            alt={"Hero image"}
            loading="eager"
            className="object-contain object-center  size-full z-10 relative"
          />
          <div className="hidden sm:block absolute top-0 left-1/5 bg-radial size-full rounded-full z-0"></div>
        </div>
      </div>
    </header>
  );
};
