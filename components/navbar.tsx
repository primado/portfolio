'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar() {

    const pathname = usePathname()

    return (
        <>
            <nav className="flex flex-row justify-between bg-[#eff2f1] items-center h-[5rem] lg:px-[10rem] sm-425:px-[2rem] md-768:px-12 px-16 py-8">
                <div className="">
                    <p className="text-black font-semibold italic shadow-2xl">
                        <Link href="/" className="text-xl" >PA</Link>
                    </p>
                </div>
                <div className="text-black">
                    <ul className="flex flex-row gap-12">
                        <li>
                            <Link href="/" className={` ${pathname === '/#projects' ? 'font-semibold' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#projects" className={` ${pathname === '/#projects' ? 'font-semibold' : ''}`}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}