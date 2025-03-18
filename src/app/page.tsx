import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24" >
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl" >Desenvolvedor</span>
            <h1 className="h1">
              Olá,Sou <br /> <span className="text-green-500 " >Pedro Arthur</span>  
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experiencia em desenvolvimento BackEnd
              </p>
          </div>

          {/* Photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}
