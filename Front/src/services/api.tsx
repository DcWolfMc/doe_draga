import axios from "axios";
import { Announce } from "../@types/Announce";

export const getCepInformation = (cep:string)=>{
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)

}

export const api = axios.create({
    baseURL: "https://doedraga-api.herokuapp.com/"
});
export const createAnnounce = async(post:Announce)=>{
    return api.post(`post_add/`, post);
};

export const getAdList = async()=>{
    return api.get("post/");
}
export const getAdById = async(id:string)=>{
    return api.get(`post/${id}`)
}
export const deletePostById = async(id:string)=>{
    return api.delete(`post_delete/${id}`)
}
export const UpdatePostById = async(id:string)=>{
    return api.put(`post_update/${id}`)
}


// transformar a imagem em base64 - se tornando uma string;



/*API DOEDRAGA
https://doedraga-api.herokuapp.com/

Lista - get
https://doedraga-api.herokuapp.com/post

Adiciona - post
https://doedraga-api.herokuapp.com/post_add

Busca por ID - get
https://doedraga-api.herokuapp.com/post/:id

Deleta - delete
https://doedraga-api.herokuapp.com/post_delete/:id

Update - put
https://doedraga-api.herokuapp.com/post_update/:id

*/