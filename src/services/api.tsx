import axios from "axios";
import { Announce } from "../@types/Announce";

export const getCepInformation = (cep:string)=>{
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)

}

export const api = axios.create({
    baseURL: "https://doedraga-api.herokuapp.com"
});
export const createAnnounce = async(post:Announce)=>{
    return api.post(`post_add/`, post);
};