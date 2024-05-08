import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero/>
      <About/>
    </div>
  );
}
