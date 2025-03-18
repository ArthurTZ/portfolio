import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNave"


export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/10"> 
            <div className="container mx-auto flex justify-between items-center">

                {/* LOGO */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold" >
                        Pedro Arthur<span className="text-amber-400">.</span>
                    </h1>
                </Link>

                {/* Desktop Navigation & Hire button */}
                
                <div className="hidden xl:flex items-center gap-8 ">
                    <Nav/>
                    <Link href="/contact">
                    <Button> Contrate-me </Button>
                    </Link>
                </div>
                
                {/* Mobile navigation */}

                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
  }

