"use client"

import {Sheet, SheetContent,SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"



const links = [
    {
        name : "home",
        path : "/",
    },
    {
        name : "services",
        path : "/services",
    },
    {
        name : "resume",
        path : "/resume",
    },
    {
        name : "work",
        path : "/work",
    },
    {
        name : "contact",
        path : "/contact",
    },
]



export default function MobileNav () {
    const pathname = usePathname()
    return (
       <Sheet>
         <SheetTrigger className="flex justify-center items-center" >
            <CiMenuFries className="text-[32px] text-green-400 " />
         </SheetTrigger>
         <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Pedro Arthur<span className="text-amber-400">.</span>
                </h1>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return <Link 
                    href={link.path}
                    key={index} 
                    className={`${link.path === pathname && "text-green-300 border-b-2 border-accent"} text-xl capitalize hover:text-green-300 transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>

         </SheetContent>
       </Sheet>
    )
}