import { AboutUs } from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import HeadingSection from "@/components/HeadingSection/HeadingSection";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import NavBar from "@/components/NavBar/NavBar";
import ContentLayout from "@/utils/ContentLayout";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <ContentLayout>
        <HeadingSection />
        <AboutUs />
        <HowToBuy />
        <Footer />
      </ContentLayout>
    </main>
  );
}
