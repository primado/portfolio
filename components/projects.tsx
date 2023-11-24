import Link from "next/link"
import { projects } from "../data/dataProjects"
import Image from "next/image"
import { MdArrowRightAlt } from "react-icons/md";

export default function Projects() {

    return (
        <>
            <div id="projects" className="bg-[#f9fafb] p-16 md-768:px-12">
                <div className="mb-8">
                    <h2 className="text-black text-3xl text-center font-semibold">Completed Projects</h2>
                </div>
                
                <div  className=" flex justify-center items-center">
                
                    {projects.map(({ id, name, url, description, imagePath }) => (

                        <div key={id} className="flex flex-row justify-center gap-8 lg:max-w-5xl md-768:flex-col md-768:gap-0">

                            <Image 
                                alt="Man Countries project"
                                src={imagePath}
                                width={500}
                                height={500}
                                className="hover:origin-top-left hover:rotate-2 duration-700 cursor-pointer hover:skew-x-1 transition-all"
                            />
                            <div className=" flex flex-col gap-3">
                                <h3 className="text-black text-2xl font-medium sm-425:text-center">{name}</h3>
                                <p className="text-[#8e9196] text-left sm-425:text-left">{description}</p>
                                <Link href={url} target="_blank" className="text-c-red text-lg p-2 font-medium flex items-center hover:underline sm-425:justify-center">
                                   <span>Full View</span> 
                                   <MdArrowRightAlt className="w-10 h-10 text-2xl" />

                                </Link>
                            </div> 
                        
                        </div>
                    ))}
                </div>
   
               
            </div>
        </>
    )
}