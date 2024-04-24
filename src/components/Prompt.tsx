import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { img_prompt1, img_prompt2, img_prompt3 } from "~/assets/images";
import { buttonVariants } from "./ui/button";

export default () => {
  return (
    <section className="py-20 min-h-[40em] bg-accent reveal-zoom">
      <div className="box">
        <div className="flex flex-col items-center relative h-[40em] rounded-full overflow-hidden justify-center">
          <div className="absolute hidden sm:block">
            <div className="size-48 md:size-80 aspect-square border rounded-full relative animate-spin duration-20k origin-center">
              <div className="absolute rounded-full bg-secondary size-8 md:size-12 right-3 top-3 md:right-6 md:top-6"></div>
              <div className="absolute rounded-full bg-secondary size-12 md:size-20 left-10  -bottom-2.5 overflow-hidden animate-spin direction-reverse origin-center duration-20k">
                <img
                  src={img_prompt3}
                  alt="prompt user 3"
                  className="size-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="absolute animate-spin direction-reverse duration-25k">
            <div className="size-[20rem] md:size-[35rem] border rounded-full relative">
              <div className="absolute rounded-full bg-secondary size-8 md:size-12 right-8 top-8 md:right-14 md:top-14"></div>
              <div className="absolute rounded-full bg-secondary size-16 md:size-20 left-4 md:left-10 bottom-4  md:bottom-10">
                <img
                  src={img_prompt1}
                  alt="prompt user 1"
                  loading="lazy"
                  className="size-full object-cover rounded-full animate-spin  origin-center duration-25k"
                />
              </div>
            </div>
          </div>

          <div className="absolute animate-spin origin-center duration-30k">
            <div className="size-[30em] md:size-[50rem] border rounded-full relative">
              <div className="absolute rounded-full bg-secondary size-10 md:size-12 md:right-24 right-[50px] top-[50px] md:top-24"></div>
              <div className="absolute rounded-full bg-secondary size-16 md:size-20 left-10 bottom-10 md:left-20 md:bottom-20">
                <img
                  src={img_prompt2}
                  alt="prompt user 2"
                  loading="lazy"
                  className="size-full object-cover rounded-full animate-spin  origin-center duration-30k direction-reverse"
                />
              </div>
            </div>
          </div>

          <div className="z-10 lg:w-[700px] backdrop-saturate-150 bg-accent/50 p-4">
            <h2 className="text-center text-balance font-bold text-2xl md:text-3xl lg:text-4xl md:leading-[45px_!important]">
              Empowering Breast Cancer Warriors with{" "}
              <span className="text-primary">Care and Support</span>
            </h2>
            <p className="text-base text-secondary mt-2.5 text-center">
              Check Me supports breast cancer warriors through every step of
              their journey. Discover how Check Me is empowering patients to
              navigate their journey.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                target="_blank"
                to={"/old-landing-page"}
                className={buttonVariants({ size: "lg" })}
              >
                Donate now{" "}
                <ChevronRight
                  aria-hidden
                  strokeWidth={1.2}
                  className="size-4 ml-0.5 group-hover:rotate-180 transition duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
