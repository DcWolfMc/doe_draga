import React from "react"
import { addDays, differenceInDays, format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FormEvent, useEffect, useState } from "react";
import { Announce } from "../../@types/Announce";
import { AdItem } from "../../components/AdItem";
import { SearchBar } from "../../components/SearchBar";
import { getAdList,UpdatePostById } from "../../services/api";
import { Container, ListContainer } from "./styles";
import { CircularProgress } from "@mui/material";
export const AdList = () => {

  const [filterText, setFilterText]= useState<string>('')
  const [adList, setAdlist] = useState<Announce[]>([])
  const [filterList, setFilterList] = useState<Announce[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  
  useEffect(()=>{
    setLoading(true);
    async function apiCall(){
    await getAdList().then((response)=>{
      console.log("response",response.data);
      let dataResponse:Announce[] = []
      let dataAtual = new Date()
      response.data.forEach((ad:Announce)=>{
        if( ad.data_termino && ad.status=="analise"){
          let daysToPass = differenceInDays(parseISO(ad.data_termino),dataAtual)
          if(daysToPass <= 0){
            UpdatePostById(ad._id!,{...ad,status:"encerrado"});
          }else{
            dataResponse.push(ad);
          }
      }else if(ad.data_liberacao && ad.status=="analise"){
        let daysToLaunch = differenceInDays(dataAtual,parseISO(ad.data_liberacao))
        if(daysToLaunch <=0){
          let dataTermino = addDays(dataAtual,ad.duracao? ad.duracao:0).toISOString()
          UpdatePostById(ad._id!,{...ad,status:"ativo",data_termino:ad.data_termino?ad.data_termino:dataTermino});
          dataResponse.push(ad);
        }
      }
      })
      let filtredList = dataResponse.filter((ad:Announce)=>{
        return ad.status == "ativo"
      });
      
      console.log("filtredList",filtredList);
      
      setAdlist(filtredList)
      setFilterList(filtredList)
      
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      setLoading(false);
    })
  }
  apiCall()
  },[])

  const data = {
    id: "2",
    title: "Titulo lo tulo Titulotitulo TituloTitulo Titulotitulotitulo ",
    createdDate: "20 de Setembro de 2020",
    expireDate: "20 de Abril de 2021",
    description:
      "Turpis egestas pretium aenean pharetra. Parturient montes nascetur ridiculus mus mauris. Semper viverra nam libero justo laoreet sit amet cursus sit. Quis varius quam quisque id diam. Eget mauris pharetra et ultrices neque ornare. Pulvinar sapien et ligula ullamcorper malesuada. Consectetur adipiscing elit duis tristique sollicitudin. Cras pulvinar mattis nunc sed blandit libero. Eu consequat ac felis donec et odio pellentesque. Tellus id interdum velit laoreet id donec ultrices.",
  };

  function handleFilter(e:FormEvent) {
    e.preventDefault()
    let filterList = adList.filter((ad) => {
      if (
        ad.titulo.toString().toLowerCase().includes(filterText.toLowerCase())||
        ad.texto.toString().toLowerCase().includes(filterText.toLowerCase())
      ) {
        return ad;
      }
    })
    setFilterList(filterList)
  }

  return (
    <Container>
      <SearchBar filterText={filterText} onSubmit={handleFilter} setFilterText={setFilterText} />
      <ListContainer>
        {loading&&(<CircularProgress />)}
        {filterList.map((ad)=>{

          let createdDate = format(ad.data_liberacao?parseISO(ad.data_liberacao) :new Date(),"dd 'de' MMMM  'de' yyyy",{
            locale: ptBR
          })
          let expireDate = format(ad.data_termino?parseISO(ad.data_termino) :new Date(),"dd 'de' MMMM  'de' yyyy",{
            locale: ptBR
          })
          return(
          <AdItem
          key={ad.id}
          id={ad.id}
          title={ad.titulo}
          description={ad.texto}
          expireDate={expireDate}
          createdDate={createdDate}
          image={ad.imagem?ad.imagem:''}
        />
          )
        })}
        {/* <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
          image="https://i.pinimg.com/564x/a8/7b/c4/a87bc4d12a957a4ed8d0b58e6957b054.jpg"
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
          image="https://i.pinimg.com/564x/2b/6d/bd/2b6dbd941642f4d3f655c67ea4c94993.jpg"
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ca/18/05/praia-de-iracema.jpg?w=1200&h=-1&s=1"
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
        />
        <AdItem
          id={data.id}
          title={data.title}
          description={data.description}
          expireDate={data.expireDate}
          createdDate={data.createdDate}
        /> */}
      </ListContainer>
    </Container>
  );
};
