import { BarChartIcon, ChevronDown, Globe } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "~/hooks";
import { cn } from "~/utils";
import { LANGUAGES, NAV_LINKS } from "~/utils/constants";
import { Icons, SideBarSheet } from "./";
import { Dropdown } from "./ui";
import { Button, buttonVariants } from "./ui/button";

export default () => {
  const [isOpen, setOpen] = useState(false);

  const closeSideBar = () => {
    setOpen(false);
  };
  const openSideBar = () => {
    setOpen(true);
  };

  return (
      <nav className="sticky top-0 h-[85px] bg-background/90 backdrop-blur-sm  z-50">
        <div className="box flex items-center justify-between h-full mx-auto ">
          <div className="">
            <Icons.Logo />
          </div>
          <div className="lg:hidden flex  z-50">
            <SideBarSheet closeSideBar={closeSideBar} isOpen={isOpen} />
            <Button
              aria-label="open drawer"
              variant={"ghost"}
              onClick={openSideBar}
              size={"icon"}
              className="bg-secondary/5 hover:bg-secondary/10 size-9 hover:border-0"
            >
              <BarChartIcon
                aria-hidden
                className="size-5 text-secondary -rotate-90"
              />
            </Button>
          </div>
          <div className="hidden lg:flex items-center gap-x-10 ">
            <NavLinks />
          </div>
        </div>
      </nav>
  );
};

interface NavLinkProps {
  classNames?: {
    parent?: string;
    li?: string;
  };
  sheetOpenned?: boolean;
  contactBtnProps?: ButtonHTMLAttributes<HTMLAnchorElement>;
  dropdownProps?: ButtonHTMLAttributes<HTMLDivElement>;
  overideLock?: boolean;
}

export const NavLinks = ({
  classNames,
  overideLock = false,
  dropdownProps,
  sheetOpenned = false,
  contactBtnProps,
}: NavLinkProps) => {
  const lg = useMediaQuery("(min-width:1024px)");

  return (
    <>
      <ul className={cn("flex gap-x-5", classNames?.parent)}>
        {NAV_LINKS.map((link) => (
          <li key={link.title}>
            <NavLink
              tabIndex={sheetOpenned || lg ? 0 : -1}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "capitalize focus-visible:ring-1  ring-primary focus-visible:outline-none rounded-lg px-1.5 flex h-full items-center transition group duration-300 gap-x-0.5 hover:text-primary/70 text-sm",
                  {
                    "text-primary font-medium": isActive,
                  },
                  classNames?.li
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
          <div {...dropdownProps}>
            <Dropdown
              data={LANGUAGES.map((name, id) => ({
                id,
                name,
              }))}
              id="Language-selection"
              title="select language"
              LeftIcon={Globe}
              overideLock={overideLock}
            />
          </div>
        </li>
      </ul>

      <Link
        to={"/"}
        tabIndex={sheetOpenned || lg ? 0 : -1}
        {...contactBtnProps}
        className={buttonVariants({
          className: contactBtnProps?.className,
        })}
      >
        Contact Us
      </Link>
    </>
  );
};
