import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionFour from "./components/SectionFour";
import SectionThree from "./components/SectionThree";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-36">
      <SectionOne />
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
      {/* <SectionFive /> */}
      <Calculator />
      <Footer />
    </main>
  );
}
