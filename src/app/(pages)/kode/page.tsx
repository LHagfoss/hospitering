import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from '@/components/CodeBlock';
import Image from "next/image";

import image1 from "../../../../public/IMG_0704.jpg";

import { sampleCodeHTML, sampleCodeDockerfile, sampleCodeJSX } from "@/components/eksempelKodeBlokker";

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <Navbar />
        <div className="flex flex-col">
          <h1 className="text-9xl">Utvikling</h1>
          <h2 className="text-5xl">på IT VG2</h2>
        </div>
      </div>
      <div className="container mx-auto p-10 px-52">
        <h1 className="mb-2 text-4xl">HTML</h1>
        <p className="mb-6 text-2xl text-zinc-400">
          HTML, eller HyperText Markup Language, er det standardiserte språket for å lage og strukturere innhold på websider.
          Det brukes til å beskrive strukturen på en side ved hjelp av tagger som angir ulike elementer som overskrifter, avsnitt, bilder og lenker.
        </p>
        <div className="w-full flex gap-5">
          <CodeBlock code={sampleCodeHTML} fileExtension="HTML" language="html" className="flex-[2]" />
          <div className="bg-white rounded-3xl p-5 flex-1">
            <h1 className="5xl font-bold text-black">Preview:</h1>
            <h1 className="text-black">Hello, world!</h1>
            <Image src={image1} alt="balls" className="object-cover rounded-md" />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10 px-52">
        <h1 className="mb-2 text-4xl">JSX, React</h1>
        <p className="mb-6 text-2xl text-zinc-400">React er et JavaScript rammeverk, for å lage en JavaScript-fil har du &quot;navn&quot;.js, for å lage en React-fil, har du &quot;navn&quot;.jsx.</p>
        <CodeBlock code={sampleCodeJSX} language="jsx" fileExtension="JSX" className="" />
      </div>
      <div className="container mx-auto p-10 px-52">
        <h1 className="mb-2 text-4xl">Docker</h1>
        <p className="mb-6 text-2xl text-zinc-400">Dette er en Dockerfile</p>
        <CodeBlock code={sampleCodeDockerfile} fileExtension="Dockerfile" language="dockerfile" className="" />
      </div>
      <Footer />
    </>
  );
}
