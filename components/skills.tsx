'use client'
import React, { useEffect } from "react"
import Image from "next/image"
import { skills } from "@/data/dataSkills"

// Image
import html from "../public/assets/html.png"
import css from "../public/assets/css.png"
import tailwindCSS from "../public/assets/tailwind.png"
import nextIMG from "../public/assets/nextjs.png"
import js from "../public/assets/js.png"
import ts from "../public/assets/typescript.png"




 function Items():any  {
    return (

        <>
            {skills.map((skill) => (

                <div  key={skill.id} className=" bg-white p-5  shadow-xl rounded-full transition-all hover:scale-110 hover:translate-y-3 hover:duration-200 delay-150 ease-in-out">
                    <Image 
                        src={skill.imagePath}
                        alt={`${ skill.name } ${ skill.id }`}
                        width={80}
                        height={80}
                        className="h-auto sm-320:!w-[5rem]"
                    />
                </div>
            ))}
        </>
    )
}



export default function Skills() {

    

    return (
        <>
            <div className="mt-[3rem] flex flex-col justify-center items-center gap-8">
                <div className="text-center">
                    <h2 className="text-black font-semibold text-3xl">Skills</h2>
                </div>
                <div className="grid grid-cols-4 place-content-center max-w-max justify-center items-center gap-x-8 gap-y-5 sm-425:grid sm-425:grid-cols-2  md-768:flex md-768:flex-wrap md-768:gap-y-5 px-12 flex-wrap sm-320:!grid sm-320:!grid-cols-2 sm-430:grid sm-320:grid-cols-2 ">

                    <Items />

                </div>
                   
            </div>
        </>
    )
}