import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { RATES } from "~/utils/constants";

export default () => {
  return (
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
            Check Me is more than a platform—it's a promise. A promise to honor
            a sister's legacy, to uplift those affected by breast cancer, and to
            support patients and specialists every step of the way. Our purpose
            is to ensure that no one faces breast cancer alone.
          </p>
          <div className="flex gap-8 flex-wrap mt-6">
            {RATES.map(({ quote, state, value }) => (
              <div
                className="[&>p]:text-sm [&>p]:opacity-70 [&>p]:mt-2 text-center"
                key={quote}
              >
                <h3 className="font-bold text-2xl  lg:text-[40px] sm:text-3xl">
                  {value}
                  {state}
                </h3>
                <p>{quote}</p>
              </div>
            ))}
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
  );
};
