import Image from "next/image";

export default function NavBar() {
  const linkItems = [
    { name: "About", id: "about" },
    { name: "How To Buy", id: "buy" },
    { name: "Tokenomics", id: "Tokenomics" },
  ];

  return (
    <div className="py-3 px-5 border-b border-white bg-[#333A73] w-full">
      <div className="max-w-[90rem] flex items-center justify-between mx-auto">
        <div className="w-28">
          <Image
            src={"/apeblue.png"}
            width={1920}
            height={1920}
            className="rounded-full"
            alt="pepe icon"
          />
        </div>
        <ul className="flex space-x-5 text-white text-2xl font-semibold">
          {linkItems.map((item) => (
            <li className="flex" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
