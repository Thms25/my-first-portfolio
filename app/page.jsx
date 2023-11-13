import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="text-light">
      <div name='home' >
        <Header />
      </div>
      <div name='about' >
        <About />
      </div>
      <div name='projects' >
        <Project />
      </div>
      <div name='skills' >
        <Skills />
      </div>
      <div name='education' >
        <Education />
      </div>
    </main>
  );
}
