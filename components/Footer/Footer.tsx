import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-20 text-darkBlue  flex flex-col items-center">
      <h3 className="text-5xl font-semibold">snipabutblue</h3>
      <div className="flex gap-4 mt-16">
        <Link
          className="text-3xl p-3 bg-black text-white rounded-lg"
          href={"#"}
        >
          <FaXTwitter />
        </Link>
        <Link
          className="text-3xl p-3 bg-darkBlue text-white rounded-lg"
          href={"#"}
        >
          <FaTelegram />
        </Link>
      </div>
    </footer>
  );
}
