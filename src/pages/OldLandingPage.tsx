import { Link } from "react-router-dom";
import { img_francis } from "~/assets/images";
import { Icons, OldFooter, OldHeader, OldNavBar, OldPerks } from "~/components";
import { buttonVariants } from "~/components/ui/button";

export default () => {
  return (
    <section className="max-w-[1900px] mx-auto font-opensans font-normal">
      <OldNavBar />
      <OldHeader />
      <div className="box flex flex-col items-center max-w-[600px] relative z-10">
        <section className="sm:-mt-24">
          <div className="flex gap-x-4">
            <img
              src={img_francis}
              alt="Francis review"
              className="object-cover bg-background shadow-[#0003] rounded-full shadow-xl sh size-14 shrink-0"
            />
            <div className="">
              <h4 className="font-semibold text-sm sm:text-base mb-3">
                Hi, I am Francis and this is my sister's legacy:
              </h4>
              <h3 className="font-semibold text-xl sm:text-4xl">
                How CheckMe Saves Lives and Honors Her Memory
              </h3>
            </div>
          </div>
          <p className="mt-5 text-sm sm:text-lg text-muted">
            Every day, I use the CheckMe app to honor my sister's memory,
            connecting with specialists, receiving personalized care plans, and
            building a community of support, all in the fight against breast
            cancer.
          </p>
          <Link
            to={""}
            className={buttonVariants({ size: "sm", className: "mt-5" })}
          >
            <Icons.PlayStore className="size-5" />
            Download From Google Play Store
          </Link>
        </section>

        {/* Perks section */}
        <OldPerks />
      </div>

      {/* Cooter section */}
      <OldFooter />
      
    </section>
  );
};
