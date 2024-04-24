import { cn } from "~/utils";
import { OLD_PERKS, OldPerkType } from "~/utils/constants";

export default () => {
  return (
    <section className="mt-20">
      <div className=""></div>
      <div className="grid gap-y-24">
        {OLD_PERKS.map((perk, i) => (
          <OldPerkCard {...perk} i={i} key={perk.title} />
        ))}
      </div>
    </section>
  );
};

interface OldPerkCardProps extends OldPerkType {
  i: number;
}

const OldPerkCard = ({ i, img, Icon, title, content }: OldPerkCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row  justify-center sm:gap-x-10 items-center",
        {
          "sm:flex-row-reverse": i % 2 !== 0,
        }
      )}
    >
      {" "}
      <div className="max-w-80">
        <img
          src={img}
          className={cn({
            "max-h-72 sm:max-h-none": i === 1,
          })}
          alt={`image-${title}`}
        />
      </div>
      <div className="text-center sm:text-left mb-7 sm:mb-0 grid sm:block place-items-center">
        <Icon
          fill="hsl(var(--secondary)))"
          aria-hidden
          className="text-white size-8"
        />
        <h2 className="font-semibold text-lg sm:text-3xl">{title}</h2>
        <p className="text-sm text-muted mt-2.5">{content}</p>
      </div>
    </div>
  );
};
