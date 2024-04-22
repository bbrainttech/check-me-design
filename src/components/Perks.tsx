import { ChevronRight } from "lucide-react";
import { cn } from "~/utils";
import { PERKS, PerkTypes } from "~/utils/constants";
import { Button } from "./ui/button";

export default () => {
  return (
    <section className="py-16">
      <div className="box">
        <div className="grid gap-y-24 max-w-screen-lg mx-auto">
          {PERKS.map((perk, i) => (
            <PerkCard {...perk} i={i} key={perk.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PerkCard = ({ i, ...perk }: PerkTypes & { i: number }) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row  justify-center sm:gap-x-10 items-center",
        {
          "sm:flex-row-reverse": i % 2 !== 0,
        }
      )}
    >
      <div className="relative  aspect-square sm:w-1/2 w-full sm:max-w-[27rem] ">
        <img
          src={`src/assets/images/ui/${perk.img}.png`}
          alt={perk.title}
          className=" object-contain object-center size-full z-20 relative"
        />
        <div className="hidden sm:block absolute bottom-0 left-1/5 bg-radial size-full rounded-full z-10"></div>
      </div>
      <div className="sm:w-1/2">
        <div className="text-sm font-medium text-secondary">
          {perk.sub_title}
        </div>
        <h2 className="text-2xl mt-1 font-bold lg:text-4xl leading-8 lg:leading-[45px] text-balance">
          {perk.title}
        </h2>
        <div className="mt-3">
          <p className="text-sm">{perk.content}</p>
          <ul className="mt-2 list- list-disc marker:text-primary gap-y-4">
            {perk.list_items.map((item, i) => (
              <li key={i.toString()} className="text-sm font-light ml-3">
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-6" size={"sm"} variant={"outline"}>
            read more{" "}
            <ChevronRight
              strokeWidth={1.3}
              aria-hidden
              className="size-5 text-primary"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
