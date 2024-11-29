import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <Navbar />
        <div className="flex flex-col">
          <h1 className="text-9xl">Hva vi lærer</h1>
          <h2 className="text-5xl">på IT VG2</h2>
        </div>
      </div>
      <div className="w-[25vw] h-[25vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <h1 className=" text-2xl">Vi lærer mye forskjellig om IT utvikling i løpet av året i vg2. Vi lærer blant annet fullt javascript, Docker og i dybden python. Vi lærer dette for å få en dypere forståelse innenfor it verdenen.</h1>
      </div>
      <Footer />
    </>
  );
};