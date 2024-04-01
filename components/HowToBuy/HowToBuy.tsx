import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HowToBuy() {
  return (
    <div className="border-b-4 border-white">
      <div className="py-20  px-5 text-center max-w-[40rem] mx-auto ">
        <h2 className="text-6xl text-darkBlue mb-16 font-semibold">
          How to buy
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full text-darkBlue text-2xl space-y-2"
        >
          <AccordionItem
            className="border-4 text-left border-white px-5"
            value="item-1"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-4 text-left border-white px-5"
            value="item-2"
          >
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-4 text-left border-white px-5"
            value="item-3"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. {"It's"} animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
