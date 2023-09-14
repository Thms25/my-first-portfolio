import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-light">
      <Header />
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
