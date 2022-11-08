import { useState } from "react";
import { AdItem } from "../../components/AdItem";
import { SearchBar } from "../../components/SearchBar";
import { Container, ListContainer } from "./styles";

export const AdList = () => {

  const [filterText, setFilterText]= useState<string>('')

  const data = {
    id: "2",
    title: "Titulo lo tulo Titulotitulo TituloTitulo Titulotitulotitulo ",
    createdDate: "20 de Setembro de 2020",
    expireDate: "20 de Abril de 2021",
    description:
      "Turpis egestas pretium aenean pharetra. Parturient montes nascetur ridiculus mus mauris. Semper viverra nam libero justo laoreet sit amet cursus sit. Quis varius quam quisque id diam. Eget mauris pharetra et ultrices neque ornare. Pulvinar sapien et ligula ullamcorper malesuada. Consectetur adipiscing elit duis tristique sollicitudin. Cras pulvinar mattis nunc sed blandit libero. Eu consequat ac felis donec et odio pellentesque. Tellus id interdum velit laoreet id donec ultrices.",
  };

  function handleSubmit(){

  }
  return (
    <Container>
      <SearchBar filterText={filterText} onSubmit={handleSubmit} setFilterText={setFilterText} />
      <ListContainer>
        <AdItem
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
        />
      </ListContainer>
    </Container>
  );
};
