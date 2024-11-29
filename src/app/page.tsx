import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <Navbar />
        <div className="flex flex-col">
          <h1 className="text-9xl">Utvilking</h1>
          <h2 className="text-5xl">på IT VG2</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};