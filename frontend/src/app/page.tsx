import Hero from "@/components/hero";
import About from "@/components/about";
import ImoveisList from "@/components/imoveisList";
import SearchMenu from "@/components/searchMenu";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero><SearchMenu/></Hero>
      <About/>
      <ImoveisList className="pb-14" cols={3}/>
    </div>
  );
}
