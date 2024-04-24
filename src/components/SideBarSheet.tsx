import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useOnClickOutside, useScrollLock } from "~/hooks";
import { cn } from "~/utils";
import { NavLinks } from "./NavBar";
import { Button } from "./ui/button";

interface SideBarProps {
  isOpen: boolean;
  closeSideBar?: () => void;
}

export default ({ isOpen, closeSideBar }: SideBarProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  useOnClickOutside(sideBarRef, () => closeSideBar && closeSideBar());

  return (
    <section
      aria-label="Navigation sidebar"
      aria-expanded={isOpen}
      className={cn(
        "absolute left-0 top-0 pointer-events-none size-full overflow-hidden min-h-screen",
        { "pointer-events-auto": isOpen }
      )}
    >
      <div
        className={cn(
          "bg-black/60 size-full absolute transition-all opacity-0 duration-500",
          {
            "opacity-100": isOpen,
          }
        )}
      ></div>
      <div
        ref={sideBarRef}
        className={cn(
          "bg-background p-2.5 h-full w-full  sm:w-[400px] relative z-50 transition-all duration-500 -translate-x-full",
          {
            "translate-x-0": isOpen,
          }
        )}
      >
        <Button
          aria-label="Close drawer"
          tabIndex={isOpen ? 0 : -1}
          size={"icon"}
          variant={"default"}
          className="absolute right-3 top-3 size-7 bg-primary/10 backdrop-blur-sm hover:bg-primary/5"
          onClick={closeSideBar}
        >
          <X aria-hidden strokeWidth={1.3} className="size-4 text-primary " />
        </Button>
        <div className="pt-8 overflow-y-auto h-full">
          <NavLinks
            classNames={{
              li: "text-base py-2.5 hover:bg-primary/5",
              parent: "grid gap-y-1",
            }}
            contactBtnProps={{
              className: "mt-2 w-full",
            }}
            dropdownProps={{
              className: "w-full mt-10 border rounded-lg border-primary py-1.5",
            }}
            sheetOpenned={isOpen}
            overideLock={isOpen}
          />
        </div>
      </div>
    </section>
  );
};
