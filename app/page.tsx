import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import Subject from "@/components/subject";


export default function Home() {
  return (
      <>
      <div className=""></div>
        <Navbar />
        <main className="bg-[#eff2f1]">

          <Hero />
          <Skills />
          <Socials />
          <section className="mt-16">
            <Subject />
          </section>
          <section className="mt-20">
            <Projects />
          </section>
        </main>
      </>
  )
}
