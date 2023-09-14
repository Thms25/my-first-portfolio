import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-light">
      <h1 className="hidden">Hello Mate</h1>
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
