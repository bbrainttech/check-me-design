import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { RATES } from "~/utils/constants";
import { buttonVariants } from "./ui/button";
import Icons from "./Icons";
import { cn } from "~/utils";

export default () => {
  return (
    <footer className="mt-24  text-background bg-gradient-to-b from-[#404375] from-0% to-100% to-[#850042]">
      <div className="box">
        <div className="flex flex-col items-center">
          <div className="flex gap-14 flex-wrap mt-12">
            {RATES.map(({ quote, state, value }) => (
              <div
                className="[&>p+p]:text-base [&>p+p]:opacity-70 [&>p+p]:mt-2 text-center"
                key={quote}
              >
                <h3 className="font-medium text-xl sm:text-3xl">{value}</h3>
                <p className="font-medium text-xl sm:text-2xl">{state}</p>
                <p>{quote}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-14 text-center flex flex-col items-center ">
          <div className="max-w-64 relative">
            <Icons.FooterMark2 className="absolute top-0 size-6 xs:-right-28 right-3" />
            <Icons.FooterMark1 className="absolute bottom-1/2 size-8 xs:-left-24  left-3" />
            <h2 className="text-xl sm:text-4xl tracking-tight font-semibold">
              Subscribe as Medical
            </h2>
            <p className="my-5 opacity-50">
              Your patient organisation in one app.
            </p>
            <Link
              to={""}
              className={cn(
                buttonVariants({
                  className: "bg-[hsl(237,29%,35%)] group transition-all duration-300 whitespace-break-spaces gap-x-4",
                })
              )}
            >
              <Download className="-rotate-90 size-5 transition-all duration-300 group-hover:size-0 group-hover:opacity-0" aria-hidden />
              Subscribe as Specialist
              <ArrowRight aria-hidden className="group-hover:size-5 transition-all duration-300 size-0" />

            </Link>
          </div>
          <hr className="opacity-20 w-full my-20"/>
          <div className=" max-w-72 flex flex-col items-center">
            <Link to={""}>
              <Icons.LinkedinWhite />
            </Link>
            <div className="mt-10 flex flex-wrap text-sm opacity-80 [&>a]:text-background gap-x-7 justify-center font-medium [&>a]:px-0">
              <Link to={""} className={buttonVariants({ variant: "link" })}>
                Features
              </Link>
              <Link to={""} className={buttonVariants({ variant: "link" })}>
                Updates
              </Link>
              <Link to={""} className={buttonVariants({ variant: "link" })}>
                Imprint
              </Link>
              <Link to={""} className={buttonVariants({ variant: "link" })}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
