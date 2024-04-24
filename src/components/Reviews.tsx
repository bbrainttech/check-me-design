import { Star } from "lucide-react";
import { CLIENTS, ClientTypes } from "~/utils/constants";

export default () => {
  return (
    <section className="py-16">
      <div className="box">
        <div className="text-primary font-medium text-base text-center">
          500+ Happy CheckMe Users
        </div>
        <h2 className="font-bold text-3xl text-secondary md:text-4xl lg:text-[45px] text-center">
          Don&apos;t just take our words
        </h2>
        <div className="mt-20 xs:grid grid-cols-[repeat(auto-fit,minmax(23rem,1fr))] gap-10 place-items-center lg:gap-x-14">
          {CLIENTS.map((client, i) => (
            <ReviewCard {...client} key={`client-${i}-${client.name}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ ...client }: ClientTypes) => {
  return (
    <div className="flex gap-5 flex-col xs:flex-row mt-7 xs:mt-0 ">
      <img
        className="aspect-square size-full xs:size-48 rounded-md object-cover object-center"
        src={client.img}
        alt={client.name}
      />
      <div className="h-full">
        <div className="flex gap-x-2">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Star
                fill={
                  i < client.star
                    ? "hsl(var(--secondary))"
                    : "hsl(var(--background))"
                }
                key={i}
                aria-hidden
                className={"size-5"}
              />
            ))}
        </div>
        <div className="mt-3">
          <p className="text-sm xs:text-xs  text-black">"{client.content}."</p>
          <div>
            <h3 className=" text-secondary font-medium mt-2.5">
              {client.name}
            </h3>
            <p className="text-sm  text-secondary-foreground">{client.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
