import { NavLink } from "react-router-dom";
import { LANGUAGES, NAV_LINKS } from "~/utils/constants";
import Icons from "./Icons";
import { Button } from "./ui/button";
import { cn } from "~/utils";
import { ChevronDown, Globe, Menu } from "lucide-react";

export default () => {
  return (
    <nav className=" sticky  top-0 h-[85px] bg-background/90 backdrop-blur-sm  z-50">
      <div className=" box flex items-center justify-between h-full mx-auto">
        <div className="">
          <Icons.Logo />
        </div>
        <div className="lg:hidden flex">
          <Menu className="text-primary"/>
        </div>
        <div className="hidden lg:flex items-center gap-x-10 ">
          <ul className="flex gap-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "capitalize flex h-full items-center transition group duration-300 gap-x-0.5 hover:text-primary/70 text-sm",
                      {
                        "text-primary font-medium": isActive,
                      }
                    )
                  }
                >
                  {link.title}
                  {link.title === "services" ? (
                    <ChevronDown
                      aria-hidden
                      strokeWidth={1.2}
                      className="size-4 ml-0.5 group-hover:rotate-180 transition duration-300"
                    />
                  ) : null}
                </NavLink>
              </li>
            ))}
            <li>
              <div className=" gap-x-1 flex font-medium  items-center cursor-pointer">
                <Globe aria-hidden strokeWidth={1.3} />
                {LANGUAGES[0]}
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.3}
                  className="size-5 ml-0.5 group-hover:rotate-180 transition duration-300"
                />
              </div>
            </li>
          </ul>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};


