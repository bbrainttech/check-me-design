import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "~/utils";
import { FAQ, FAQTypes } from "~/utils/constants";

export default () => {
  const [Faq, setFaqs] = useState<FAQTypes[]>(FAQ);

  const dropFaq = (id: number) =>
    setFaqs((prevData) =>
      prevData.map((current, i) => ({
        ...current,
        isDrop: !current.isDrop && i === id,
      }))
    );

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
        <ul className="mt-10 max-w-4xl mx-auto ">
          {Faq.map((faq, i) => (
            <FAQItem i={i} onOpen={dropFaq} {...faq} key={i.toString()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const FAQItem = ({
  i,
  isDrop,
  question,
  answer,
  onOpen,
}: FAQTypes & { i:number,onOpen: (i:number) => void }) => {
  let n=0;
  return (
    <li onKeyUp={(e)=>{
      if(e.code === 'ArrowUp'){
        n+=1;
        e.preventDefault()
        
        console.log(n)
        onOpen(n)

      }
    }} onClick={()=>onOpen(i)} className="py-6 rounded-lg border-b border-secondary/10  focus-visible:outline-none focus-visible:bg-accent focus-visible:ring-[0.25px] ring-offset-4  ring-primary" tabIndex={0}>
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

