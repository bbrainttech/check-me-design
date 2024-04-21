import { ChevronRight } from "lucide-react";
import "./App.css";
import { Footer, NavBar } from "./components";
import { Button } from "./components/ui/button";
import { useMediaQuery } from "./hooks";

const App = () => {
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <section className="">
      <NavBar />
      <header className="mt-16 box">
        <div className="mx-auto w-full max-w-[838px]">
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
          <div className="flex justify-center mt-6 gap-x-8 items-center">
            <Button size={md ? "lg" : "sm"}>our services</Button>
            <Button size={md ? "lg" : "sm"} variant={"outline"}>
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
          loading="lazy"
          className="max-h-[712px] w-full object-cover rounded-t-lg brightness-75"
        />
      </div>
      <div className="bg-secondary py-20 text-[hsl(240_15%_94%)]">
        <div className="box gap-y-8 md:gap-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start items-start place-items-center md:gap-x-7">
          <div className="">
            <p className="text-sm">About CheckMe</p>
            <h2 className="font-bold mt-2 leading-9 md:leading-[50px] text-2xl sm:text-3xl lg:text-4xl text-balance">
              Founded on Love, Loss, and a Commitment to{" "}
              <span className="text-primary">
                Empower Patients and Specialists
              </span>
              .
            </h2>
          </div>
          <div className="h-48 w-[0.5px] bg-background/20 lg:block hidden  self-center"></div>
          <div className="">
            <p className="text-sm font-light leading-6 opacity-70">
              Check Me is more than a platform—it's a promise. A promise to
              honor a sister's legacy, to uplift those affected by breast
              cancer, and to support patients and specialists every step of the
              way. Our purpose is to ensure that no one faces breast cancer
              alone.
            </p>
            <div className="flex gap-8 flex-wrap mt-6">
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl  lg:text-[40px] sm:text-3xl">100+</h3>
                <p>Active Users</p>
              </div>
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl  lg:text-[40px] sm:text-3xl">1K+</h3>
                <p>Medical Specialists</p>
              </div>
              <div className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center">
                <h3 className="font-bold text-2xl sm:text-3xl  lg:text-[40px]">100%</h3>
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
      <Footer />
    </section>
  );
};

export default App;
