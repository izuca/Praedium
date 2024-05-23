import axios from "axios";
import { useRouter } from "next/router";
export function useCRUD(){


    const fetchImoveis = () =>{
        let imoveis = [];
        console.log('Buscando');
        axios
            .get('/api/imoveis/')
            .then((data)=>{
                imoveis = data;
                console.log('aaa');
            })
            .catch((error) =>{
                console.log(error)
                throw error;
            })
        
    }

    return {
        fetchImoveis
    }
}