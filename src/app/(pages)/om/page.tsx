import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import sc1 from "../../../../public/tangen_atem-1.jpg"
export default function Home() {
  return (
    <>
      <div className="w-[100vw] flex flex-col justify-center items-center overflow-hidden font-[--font-geist-mono]">
        <Navbar />
        <div className="flex flex-col my-52">
          <h1 className="text-9xl">Utvilking</h1>
          <h2 className="text-5xl">Om Faget</h2>
        </div>
        <div className="container mx-auto p-5 md:px-52">
          <div className="flex flex-col">
          <p className="text-2xl">IT læren er en viktig del av samfunnet vårt. Vi kan bare bevege fremover hvis vi lærer om og bruker IT for å utvikle sammfunnet vårt. Vi jobber hardt hver dag for å lære oss dette som at vi kan være med på utviklingen av sammfunnet.</p>
            <div className="flex flex-col my-10">
              <p className="text-4xl font-bold">Kompetansemål og vurdering utvikling</p>
              <ul className="list-disc p-5 text-2xl text-zinc-400">
                <li>Vurdere fordeler og ulemper ved ulike programmeringsspråk og velge og anvende relevante programmeringsspråk og algoritmer i eget arbeid</li>
                <li>Lage og begrunne funksjonelle krav til en IT-løsning basert på behovskartlegging</li>
                <li>Vurdere brukergrensesnitt til IT-tjenester og designe tjenester som er tilpasset brukernes behov</li>
                <li>Gjøre rede for hensikten med teknisk dokumentasjon og utarbeide teknisk dokumentasjon for IT-løsninger</li>
                <li>Beskrive og anvende relevante versjonskontrollsystemer i utviklingsprosjekter</li>
                <li>Designe og implementere IT-tjenester med innebygget personvern</li>
                <li>Analysere digitale trusler, verdier og sårbarheter og utvikle applikasjoner med innebygget sikkerhet</li>
                <li>Anvende relevant testmiljø og utføre testing tilpasset IT-løsningen som utvikles</li>
                <li>Modellere og opprette databaser for informasjonsflyt i systemer</li>
                <li>Beskrive ulike datalagringsmodeller og metoder for å hente ut og sette inn bestemte data fra databaser som brukes av andre systemer</li>
            </ul>
            </div>
            <Image src={sc1} alt="yoyo" className="rounded-3xl my-10 w-full object-cover"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};