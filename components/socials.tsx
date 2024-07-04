import Link from "next/link";
import Image from "next/image"

// Images
import LinkedIn from "../public/assets/linkedin.png";
import x from "../public/assets/x.png";
import github from "../public/assets/Octocat.png"



export default function Socials() {

    return (
        <>
            <div className="relative bg-red-500 ">
                <div className="fixed bottom-[18rem] left-5 flex flex-col gap-y-5 sm-425:bottom-[6rem]" >
                    <div className="bg-white shadow-xl p-2 hover:bg-gray-200">
                        <Link href="https://linkedin.com/in/primado/" target="_blank" >
                        <Image 
                            alt="LinkedIN"
                            src={LinkedIn}
                            className="w-5 h-5"
                        />
                        </Link>
                    </div>
                    <div className="bg-white shadow-xl p-2 hover:bg-gray-200">
                        <Link href="https://twitter.com/_primado/" target="_blank" >
                        <Image 
                            alt="LinkedIN"
                            src={x}
                            className="w-5 h-5"
                        />
                        </Link>
                    </div>
                    <div className="bg-white shadow-xl p-2 hover:bg-gray-200">
                        <Link href="https://github.com/primado/" target="_blank" >
                        <Image 
                            alt="LinkedIN"
                            src={github}
                            className="w-5 h-5"
                        />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}