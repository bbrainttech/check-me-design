import { MinusCircle, PlusCircle } from "lucide-react";
import { KeyboardEvent, RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "~/hooks";
import { cn } from "~/utils";
import { CONTROL_KEYS, FAQ, FAQTypes } from "~/utils/constants";

export default () => {
  const [Faq, setFaqs] = useState<FAQTypes[]>(FAQ);

  const dropFaq = (id: number) =>
    setFaqs((prevData) =>
      prevData.map((current, i) => ({
        ...current,
        isDrop: !current.isDrop && i === id,
      }))
    );
  const ulRef = useRef<HTMLUListElement>(null);

  useOnClickOutside(ulRef, () => setFaqs(FAQ));

  return (
    <section className="py-20">
      <div className="box">
        <h2 className="font-bold text-3xl text-secondary md:text-4xl lg:text-[45px] text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-center mt-6">
          Everything you need to know about Check Me for Cancer warriors and
          medical specialists
        </p>
        <ul className="mt-10 max-w-4xl mx-auto " ref={ulRef}>
          {Faq.map((faq, i) => (
            <FAQItem
              i={i}
              ulRef={ulRef}
              onOpen={dropFaq}
              {...faq}
              key={i.toString()}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

interface FAQItemProps extends FAQTypes {
  i: number;
  onOpen: (i: number) => void;
  ulRef: RefObject<HTMLUListElement>;
}
const FAQItem = ({
  i,
  isDrop,
  question,
  answer,
  onOpen,
  ulRef,
}: FAQItemProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    const listItems = ulRef.current?.getElementsByTagName("li");

    if (!CONTROL_KEYS.includes(e.key)) return;

    const target = e.key;
    const triggerIndex = i;
    const triggerCount = FAQ.length;
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
    onOpen(clampedIndex);
  };

  return (
    <li
      onKeyDown={handleKeyDown}
      onClick={() => onOpen(i)}
      className="py-6 rounded-lg border-b border-secondary/10  focus-visible:outline-none focus-visible:bg-accent focus-visible:ring-[0.25px] ring-offset-4  ring-primary"
      tabIndex={0}
      aria-label={`faq-${question}`}
    >
      <div>
        <div
          className={cn(
            "flex items-start justify-between gap-x-2 cursor-pointer",
            { "text-primary": isDrop }
          )}
        >
          <p className="font-medium ">{question}?</p>
          <div className="size-5">
            <MinusCircle
              aria-hidden
              className={cn(
                " size-0 opacity-0  text-secondary transition-all duration-300",
                { "size-5 opacity-1 text-primary": isDrop }
              )}
            />
            <PlusCircle
              aria-hidden
              className={cn(
                "text-secondary opacity-0 size-0  transition-all duration-300",
                {
                  "opacity-1 size-5": !isDrop,
                }
              )}
            />
          </div>
        </div>
        <div
          className={cn(
            "grid relative grid-rows-[0fr] transition-all duration-300 ",
            {
              "grid-rows-[1fr] pb-4": isDrop,
            }
          )}
        >
          <p
            className={cn(
              "overflow-hidden transition-all rotate-3 duration-500 text-sm translate-y-6 opacity-0",
              {
                "opacity-100 translate-y-3 rotate-0  ": isDrop,
              }
            )}
          >
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
};
