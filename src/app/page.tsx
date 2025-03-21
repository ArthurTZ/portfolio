import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24" >

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor</span>
            <h1 className="h1">
              Olá,Sou <br /> <span className="text-green-500 " >Pedro Arthur</span>  
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experiencia em desenvolvimento de software para automações,RPA e desenvolvimento web
              </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2" variant="outline" size="lg">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0" ></div>
              <Socials containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-green-400 text-base hover:bg-accent hover:text-primrary hover:transition-all duration-500"/>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0" >
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
