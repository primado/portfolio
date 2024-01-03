"use client"
import Image from "next/image"
import Link from "next/link"
import { BsDownload } from "react-icons/bs"
import TypingAnimation from "./TypingAnimations"

// Image
import profile from "../public/assets/profile-pic.jpg"

export default function Hero() {

    const experience: number = 3

    return (
        <>
            <div className=" md-768:px-12 px-12">
                <div className="flex flex-col gap-y-16 justify-center items-center gap-3 sm-425:px-5 sm-430:px-1">
                    <div className="flex flex-col justify-center items-center gap-y-3 sm-425:gap-y-3">
                        <h1 className="text-black text-5xl text-center font-semibold break-words sm-320:text-3x sm-425:p-3 sm-425:w-full sm-425:h-[12rem] sm-320:h-[7rem] sm-430:h-[12rem] sm-280:border-2 sm-280:border-black sm-280:!w-[17.8rem] sm-280:h-[15rem]">Hi, I&apos;m <span className="!text-c-red">
                            <TypingAnimation 
                                strings={['Prince Adimado', 'a Software Developer', 'Frontend Developer']}
                                typeSpeed={30}
                                backSpeed={30}
                                loop={true}
                            />
                            </span>
                        </h1>
                        <div className="text-center sm-425:text-center lg:px-[15rem] s">
                            <p className="text-txt-gray text-base break-words p-3">
                                With <span className="bg-c-red text-white px-1">{ experience } years</span>  of experience in web development with knowledge in Backend and <span className="!text-c-red font-semibold">Frontend Development</span> {' '} 
                                I&apos;m able to understand and colloborate with other developers and designers to build a good responsive product to the market.
                            </p>
                        </div>
                        <div className="">
                            <Link href="https://drive.google.com/file/d/1GBKKY1ESgynJv-UmFQQ9hlDsC-EVRU8N/view?usp=sharing" target="_blank" className="flex items-center gap-3 justify-center flex-row hover:bg-gray-500 max-w-max hover:bg-opacity-25 hover:font-semibold p-2 rounded-md transition-all hover:delay-150 hover:duration-100">
                                View my Resume
                                <BsDownload className="text-black text-base font-bold " />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-5 lg:w-[50%] sm-425:flex-col sm-425:!justify-center sm-425:!items-center sm-425:gap-y-8 sm-430:flex-col sm-430:gap-8 ">
                        <div className="flex flex-col gap-y-5 sm-425:flex sm-425:flex-col sm-425:gap-y-3 sm-430:gap-3">
                            <h2 className="capitalize text-black font-bold text-2xl text-right sm-425:text-center sm-430:text-center sm-280:text-base">I&apos;ve a burning desire to translate design to code for web applications with responsiveness in mind</h2>
                            <p className="text-black text-base flex flex-row gap-x-2 justify-end sm-425:justify-center sm-425:flex-col sm-425:items-center sm-430:justify-center sm-430:items-center">Sound interesting? 
                                <Link href="https://linkedin.com/in/primado" target="_blank" className="text-c-red hover:underline hover:transition-all hover:ease-in-out  ">Let&apos;s talk</Link>
                            </p>
                        </div>
                        <div className="">
                            <Image 
                                width={500}
                                height={500}
                                src={profile}
                                alt="Prince Adimado Profile photo"
                                className="h-auto rounded-full shadow-2xl object-contain  "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}