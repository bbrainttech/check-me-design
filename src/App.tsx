import { ChevronRight } from "lucide-react";
import {
  FAQ,
  Footer,
  Icons,
  NavBar,
  Perks,
  Prompt,
  Reviews,
} from "./components";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <section className="max-w-[1900px] mx-auto">
      <NavBar />
      <header className="mt-16 box">
        <div className=" w-full left-0 overflow-hidden absolute top-0 z-0  ">
          <Icons.HeroGrid className="w-full scale-150 sm:scale-100" />
        </div>
        <div className="mx-auto w-full max-w-[838px] z-10 relative  ">
          <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[56px] leading-[45px] lg:leading-[85px] text-center text-balance ">
            Transforming{" "}
            <span className="text-primary">Breast Cancer Care</span>, One
            Patient at a Time
          </h1>
          <p className="text-sm md:text-base  text-secondary text-center mt-2">
            Check Me mobile app connects patients and doctors for seamless
            communication, effortless appointment management, and a more
            empowered healthcare experience.
          </p>
          <div className="flex justify-center mt-6 gap-8 items-center flex-wrap">
            <Button className="h-8 md:h-12 px-3 md:px-8" size={"lg"}>
              our services
            </Button>
            <Button
              className="h-8 md:h-12 px-3 md:px-8"
              size={"lg"}
              variant={"outline"}
            >
              contact us
              <ChevronRight
                aria-hidden
                strokeWidth={1.2}
                className="size-4 ml-0.5 group-hover:rotate-180 transition duration-300"
              />
            </Button>
          </div>
        </div>
      </header>
      <div className="mt-20 ">
        <img
          src="src/assets/images/hero-img.jpg"
          alt="hero image"
          loading="eager"
          className="max-h-[712px] w-full object-cover md:rounded-t-lg brightness-75"
        />
      </div>
      <div className="bg-secondary z-10 relative py-20 text-[hsl(240_15%_94%)] ">
        <div className="box gap-y-8 lg:gap-y-0 grid md:grid-cols-4  lg:grid-cols-5 place-content-start items-start place-items-center ">
          <div className="col-span-2">
            <p className="text-sm">About CheckMe</p>
            <h2 className="font-bold mt-2 leading-9 lg:leading-[50px] text-2xl sm:text-3xl lg:text-4xl text-balance">
              Founded on Love, Loss, and a Commitment to{" "}
              <span className="text-primary">
                Empower Patients and Specialists
              </span>
              .
            </h2>
          </div>
          <div className="h-64 w-[0.5px] bg-background/20 lg:block hidden  self-center  col-span-1"></div>
          <div className=" col-span-2 md:ml-4">
            <p className="text-sm font-light leading-6 opacity-70">
              Check Me is more than a platform—it's a promise. A promise to
              honor a sister's legacy, to uplift those affected by breast
              cancer, and to support patients and specialists every step of the
              way. Our purpose is to ensure that no one faces breast cancer
              alone.
            </p>
            <div className="flex gap-8 flex-wrap mt-6">
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl  lg:text-[40px] sm:text-3xl">
                  100+
                </h3>
                <p>Active Users</p>
              </div>
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl  lg:text-[40px] sm:text-3xl">
                  1K+
                </h3>
                <p>Medical Specialists</p>
              </div>
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl sm:text-3xl  lg:text-[40px]">
                  100%
                </h3>
                <p>Free for Patients</p>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="mt-6 border-background text-background hover:text-secondary"
            >
              read more
              <ChevronRight
                aria-hidden
                strokeWidth={1.2}
                className="size-4 ml-1.5 group-hover:rotate-180 transition duration-300"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Perks sectio */}
      <Perks />

      {/* Reviews section */}
      <Reviews />

      {/*FAQ section */}
      <FAQ />

      {/* Prompt section */}
      <Prompt />

      {/* Foter section */}
      <Footer />
    </section>
  );
};

export default App;
