import { ChevronDown, LucideIcon } from "lucide-react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useOnClickOutside, useScrollLock } from "~/hooks";
import { cn } from "~/utils";
import { CONTROL_KEYS } from "~/utils/constants";

interface DropdownItem {
  id: number;
  name: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  overideLock?: boolean;
  data: DropdownItem[];
  className?: string;
  LeftIcon?: LucideIcon;
  onSelect?: (id: number) => void;
}

export default ({
  id,
  title = "Select",
  data,
  LeftIcon,
  className,
  overideLock,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    data?.[0]
  );

  const { lockScroll, unlockScroll } = useScrollLock();

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const wrapperRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const listItems = wrapperRef.current?.getElementsByTagName("button");

    if (!CONTROL_KEYS.includes(e.key)) return;

    const target = e.key;
    const triggerIndex = i;
    const triggerCount = data.length;
    if (triggerIndex === -1) return;

    e.preventDefault();

    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;

    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex) nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex) nextIndex = endIndex;
    };

    if (target === "ArrowUp" || target === "ArrowLeft") movePrev();
    else if (target === "ArrowDown" || target === "ArrowRight") moveNext();

    const clampedIndex = nextIndex % triggerCount;

    listItems?.[clampedIndex].focus();
  };

  const onClick = () => {
    const index = selectedItem?.id || 0;
    wrapperRef.current?.getElementsByTagName("button")[index].focus();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!overideLock) {
      document.onkeydown = (e) => {
        if (isOpen && e.key === "Escape") {
          setIsOpen(false);
        }
      };
      isOpen ? lockScroll() : unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll, overideLock]);
  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        aria-describedby={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={onClick}
        className={cn(
          " gap-x-1 flex w-full justify-between font-light rounded-md p-1  items-center cursor-pointer relative  capitalize focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
          className
        )}
      >
        {LeftIcon ? <LeftIcon aria-hidden strokeWidth={1.3} /> : null}
        <span>{selectedItem?.name || title}</span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.3}
          className={cn(
            "size-5 ml-0.5 group-hover:rotate-180 transition duration-300",
            {
              "rotate-180": isOpen,
            }
          )}
        />
      </button>

      <div
        aria-label="Dropdown menu"
        className={cn(
          "absolute pointer-events-none border p-1.5 right-0 top-4 scale-y-[.95] mt-2 opacity-0 transition-all duration-200  overflow-y-auto rounded-lg max-h-56 w-full lg:w-max shadow-lg bg-background",
          {
            "opacity-100 top-full scale-y-100 pointer-events-auto": isOpen,
          }
        )}
      >
        <ul
          ref={wrapperRef}
          role="menu"
          aria-labelledby={id.toString()}
          aria-orientation="vertical"
          className="space-y-1"
        >
          {data?.map((item, i) => (
            <li key={item.id}>
              <button
                onClick={() => handleChange(item)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={cn(
                  "focus-visible:outline-none overflow-hidden hover:bg-primary/5 hover:text-primary  text-left w-full focus-visible:ring-1 focus-visible:ring-primary/50 text-base  cursor-pointer p-1.5 rounded-md ",
                  {
                    "bg-primary/10  text-primary": selectedItem?.id === item.id,
                  }
                )}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
