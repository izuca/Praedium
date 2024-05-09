import Hero from "@/components/hero";
import About from "@/components/about";
import ImoveisList from "@/components/imoveisList";
ImoveisList

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero/>
      <About/>
      <ImoveisList className="pb-14"/>
    </div>
  );
}
