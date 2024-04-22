import { ChevronDown, Globe, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { cn } from "~/utils";
import { Languages, LANGUAGES, NAV_LINKS } from "~/utils/constants";
import Icons from "./Icons";
import { Button } from "./ui/button";

export default () => {
  const [searchParam,setSearchParam] = useSearchParams()

  const lang = searchParam.get('lang') as Languages

  const language = LANGUAGES.map(l=>l.toLowerCase()).includes(lang?.toLowerCase())?lang:null
  const [selectedLang, setSelectedLang] = useState<Languages>(language||"English");


  return (
    <nav className="sticky top-0 h-[85px] bg-background/90 backdrop-blur-sm  z-50">
      <div className="box flex items-center justify-between h-full mx-auto ">
        <div className="">
          <Icons.Logo />
        </div>
        <div className="lg:hidden flex">
          <Menu className="text-primary" />
        </div>
        <div className="hidden lg:flex items-center gap-x-10 ">
          <ul className="flex gap-x-5">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "capitalize focus-visible:ring-1 ring-primary focus-visible:outline-none rounded-lg px-1.5 flex h-full items-center transition group duration-300 gap-x-0.5 hover:text-primary/70 text-sm",
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
              <div className=" gap-x-1 flex font-medium  items-center cursor-pointer relative  capitalize">
                <Globe aria-hidden strokeWidth={1.3} />
                {selectedLang}
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.3}
                  className="size-5 ml-0.5 group-hover:rotate-180 transition duration-300"
                />
                {/* <ul className="rounded-b-xl p-1.5 shadow-lg absolute bg-background/90 backdrop-blur-sm top-[54.5px] transition-all duration-300 ">
                  {LANGUAGES.map((lang) => (
                    <li
                      key={lang}
                      className="text-center font-light hover:bg-accent border border-transparent hover:border-primary rounded-lg mt-0.5 text-sm"
                    >
                      <Link
                      to={`/?lang=${lang}`}
                      onClick={()=>setSelectedLang(lang)}
                        className={cn(
                          "focus-visible:outline-0 focus-visible:bg-accent  focus-visible:ring-1 ring-primary rounded-lg w-full py-1 px-1.5",
                          {}
                        )}
                      >
                        {lang}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </li>
          </ul>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};
