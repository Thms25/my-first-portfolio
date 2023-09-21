import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-light">
      <Header />
      <About />
      <Skills />
      <Education />
    </main>
  );
}
