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
            <AccordionTrigger>GET SOME ETH</AccordionTrigger>
            <AccordionContent>Have some ETH in your wallet</AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-4 text-left border-white px-5"
            value="item-2"
          >
            <AccordionTrigger>BRIDGE YOUR ETH</AccordionTrigger>
            <AccordionContent>
              Bridge your Eth from Ethereum Network to Base Network Using
              https://bridge.base.org/deposit
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-4 text-left border-white px-5"
            value="item-3"
          >
            <AccordionTrigger>SWITCH YOUR BASE ETH FOR $Snipa</AccordionTrigger>
            <AccordionContent>
              Just like Pepe’s loyal following, our community is passionate and
              engaged. We’re not just building a token; we’re creating a
              movement. Join us, and let’s make waves together.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
