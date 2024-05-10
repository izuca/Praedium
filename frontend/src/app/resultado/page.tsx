import ImoveisList from "@/components/imoveisList";
import SearchMenu from "@/components/searchMenu";

export default function Resultado(){
    return(
        <div className="flex flex-col items-center p-8 xl:flex-row xl:p-32 gap-8">
            <div><SearchMenu/></div>
            <ImoveisList cols={2} title="Resultados"/>
        </div>
    )
}