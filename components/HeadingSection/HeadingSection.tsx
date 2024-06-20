import Image from "next/image";
import Link from "next/link";

export default function HeadingSection() {
  return (
    <div className="flex md:flex-row flex-col border-b-4 pb-20 border-white">
      <Image
        className=" w-full md:max-w-[56.8%] md:order-1 order-2"
        src={"/apeblue.png"}
        width={1920}
        height={1080}
        alt="pepe blue"
      />
      <div className=" flex flex-col md:order-2 order-1  md:px-0 px-5  mt-[25%] md:mt-0 space-y-5 justify-center text-darkBlue">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Not a Cat not a Dog <br /> $PIPA
        </h1>
        <p className="text-2xl">$PIPA is ready to conquer Solana.</p>
        {/* <div>
          <Link
            target="_blank"
            href={
              "https://dexscreener.com/base/0x0a5a0b46a43e4cd3ba91e78f49dc678bf45e4ed2"
            }
            className="bg-darkBlue text-white px-3 py-2 text-2xl font-semibold rounded-md border-4 border-white"
          >
            Chart
          </Link>
        </div> */}
      </div>
    </div>
  );
}
