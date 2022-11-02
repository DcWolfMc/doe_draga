import axios from "axios";

export const getCepInformation = (cep:string)=>{
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)

}
