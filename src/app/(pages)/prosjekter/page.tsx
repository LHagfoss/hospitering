import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import sc1 from "../../../../public/sc1.png"

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <Navbar />
        <div className="flex flex-col">
          <h1 className="text-9xl">Prosjekter</h1>
          <h2 className="text-5xl">på IT VG2</h2>
        </div>
      </div>
      <div className="container mx-auto p-10 px-44">
          <h1 className="text-7xl">Nettsider</h1>
      </div>
      <div className="container mx-auto p-10 px-44">
      <h1>Vi lager mange forskjellige nettsider med skolen. Vi har for eksempel laget et lite spill av tic tac toe i react. Vi har også hatt egne prosjekter med nettsider som portoføljer og andre gøye nettsider. Dette skal da hjelpe oss til når vi kommer ut til det ekte markedet.</h1>
      </div>
      <div className="w-[100vw] h-[10vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
          <h1 className="text-7xl">Spill og Programvarer</h1>
      </div>
      <div className="container mx-auto p-10 px-44">
      <h1>Vi lager mange forskjellige Programvarer med skolen. Noen av oss har for eksempel laget et spill som heter city case som er laget i unity. Vi har også hatt egne prosjekter med andre spill og programvarer. Noen av oss har til og med greid å lage et virus. Dette skal da hjelpe oss til når vi kommer ut til det ekte markedet.</h1>
      <Image className= "rounded-3xl" src={sc1} alt="yoyo"/>
      </div>
      <Footer />
    </>
  );
};