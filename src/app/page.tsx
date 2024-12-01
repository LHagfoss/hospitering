import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <div className="flex flex-col">
          <h1 className="text-9xl">Utvilking</h1>
          <h2 className="text-5xl">IT VG2 Tangen</h2>
          <p className="">Laget av Lucas og Odin 🤍🤍🤍</p>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh]">
        <div className="container mx-auto p-10 px-52">
          <div className="w-full h-[50vh] rounded-3xl bg-zinc-900">

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};