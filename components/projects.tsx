import Link from "next/link"
import { projects } from "../data/dataProjects"
import Image from "next/image"
import default_img from "@/public/assets/man-countries.png"

export type ProjectDTO = {
    id: number,
    name: string,
    url?: string,
    demo?: string,
    source?: string | null | undefined,  // Allow undefined
    description: string,
    imagePath: string | undefined
}


export default function Projects() {

    return (
        <>
            <div id="projects" className="bg-[#f9fafb] p-16 md-768:px-12">
                <div className="mb-8">
                    <h2 className="text-black text-3xl text-center font-semibold">Completed Projects</h2>
                </div>
                
                <div  className=" flex flex-col gap-8 justify-center items-center">
                
                    {projects.map((data: ProjectDTO) => (

                        <div key={data.id} className="flex flex-row justify-center gap-8 lg:max-w-5xl md-768:flex-col md-768:gap-0">

                            <Image 
                                alt="Man Countries project"
                                src={data.imagePath || default_img}
                                width={500}
                                height={500}
                                className="hover:origin-top-left hover:rotate-2 duration-700 cursor-pointer hover:skew-x-1 transition-all"
                            />
                            <div className=" flex flex-col gap-3 sm:w-[35rem] sm:mt-0 mt-2 w-full">
                                <h3 className="text-black text-xl font-medium sm-425:text-left">{data.name}</h3>
                                <p className="text-[#8e9196] text-left sm-425:text-left">{data.description}</p>
                                <div className="flex flex-row gap-3">
                                    {data.url && (
                                    <Link href={data.url} target="_blank" className="text-c-red text-base px-2 py-1 bg-slate-300 rounded-md font-semibold border-white border flex items-center hover:underline sm-425:text-left">
                                       <span>Full View</span> 
                                       {/* <MdArrowRightAlt className="w-5 h-5 text-2xl" /> */}
                                    </Link>
                                    )}
                                    {data.source && (
                                        <Link href={data.source} target="_blank" className="text-c-red text-base px-1 py-2 bg-slate-300 rounded-md font-semibold border-white border flex items-center hover:underline sm-425:text-left">
                                           <span>Source</span> 
                                           {/* <MdArrowRightAlt className="w-5 h-5 text-2xl" /> */}

                                        </Link>
                                    )}
                                    {data.demo && (
                                        <Link href={data.demo} target="_blank" className="text-c-red text-base px-1 py-2 bg-slate-300 rounded-md font-semibold border-white border flex items-center hover:underline sm-425:text-left">
                                           <span>Demo Video</span> 
                                           {/* <MdArrowRightAlt className="w-5 h-5 text-2xl" /> */}

                                        </Link>
                                    )}
                                </div>
                               
                            </div> 
                        
                        </div>
                    ))}
                </div>
   
               
            </div>
        </>
    )
}