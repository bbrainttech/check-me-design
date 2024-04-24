import { Icons } from "~/components";
import { Button } from "~/components/ui/button";

export default () => {
  return (
    <section className="font-opensans">
      <div className="box">
        <div className="border">
          <h1 className=" font-semibold text-balance text-5xl">
            Fight <span className="text-primary">Breast Cancer</span>!
          </h1>
          <p className="">
            Connect with specialists, learn from experiences and receive breast
            cancer treatments
          </p>
          <Button className="gap-x-2 text-base font-medium">
            <Icons.PlayStore />
            Download from Google Play Store
          </Button>
        </div>
      </div>
    </section>
  );
};
