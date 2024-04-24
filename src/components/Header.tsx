import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import { buttonVariants } from "./ui/button";

export default () => {
  return (
    <header className="mt-16 box">
      <div className=" w-full left-0 overflow-hidden absolute top-0 z-0  ">
        <Icons.HeroGrid className="w-full scale-150 sm:scale-100" />
      </div>
      <div className="mx-auto w-full max-w-[838px] z-10 relative  ">
        <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[56px] leading-[45px] lg:leading-[85px] text-center text-balance ">
          Transforming <span className="text-primary">Breast Cancer Care</span>,
          One Patient at a Time
        </h1>
        <p className="text-sm md:text-base  text-secondary text-center mt-2">
          Check Me mobile app connects patients and doctors for seamless
          communication, effortless appointment management, and a more empowered
          healthcare experience.
        </p>
        <div className="flex justify-center mt-6 gap-8 items-center flex-wrap">
          <Link
            to={"/"}
            className={buttonVariants({
              size: "lg",
              variant: "default",
              className: "h-8 md:h-12 px-3 md:px-8",
            })}
          >
            our services
          </Link>
          <Link
            to={"/"}
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "h-8 md:h-12 px-3 md:px-8",
            })}
          >
            contact us
            <ChevronRight
              aria-hidden
              strokeWidth={1.2}
              className="size-4 ml-0.5 group-hover:rotate-180 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
