import { img_hero } from "~/assets/images";
import {
  About,
  FAQ,
  Footer,
  Header,
  NavBar,
  Perks,
  Prompt,
  Reviews,
} from "~/components";

export default () => {
  return (
    <>
      <title>Check Me New landing page</title>
      <section className="max-w-[1900px] mx-auto font-poppins">
        <NavBar />
        <Header />
        <div className="mt-20">
          <img
            src={img_hero}
            alt="hero image"
            loading="eager"
            className="max-h-[712px] w-full object-cover md:rounded-t-lg brightness-75"
          />
        </div>
        {/* About section */}
        <About />

        {/* Perks section */}
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
    </>
  );
};
