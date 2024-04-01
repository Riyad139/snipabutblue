import Image from "next/image";

export function AboutUs() {
  return (
    <div className="flex md:flex-row flex-col px-5 border-b-4 border-white pt-10 pb-20">
      <div className="flex md:mt-0 mt-20  text-darkBlue flex-col justify-center">
        <h2 className="text-7xl font-semibold">About</h2>
        <h2 className="text-7xl font-semibold">sinpabutblue</h2>
        <p className="text-2xl mt-7">
          The iconic green frog that took the crypto world by storm.Well,{" "}
          {"that's"}
          Pepe—the meme that transcended pixels and became a cultural
          phenomenon. But what if I told you {"there's"} a new frog in town—one
          that wears the color of the sky and dreams of soaring even higher?
          Introducing PEPEBUTBLUE in the blue base chain.
        </p>
      </div>
      <Image
        className=" w-full md:max-w-[50%] "
        src={"/apeblue.png"}
        alt="pepe blue"
        width={1920}
        height={1080}
      />
    </div>
  );
}
