import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="text-light">
      <div name='home' id='home' >
        <Header />
      </div>
      <div name='about' id='about' >
        <About />
      </div>
      <div name='projects' id='projects' >
        <Project />
      </div>
      <div name='skills' id='skills' >
        <Skills />
      </div>
      <div name='education' id='education' >
        <Education />
      </div>
    </main>
  );
}
