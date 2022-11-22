import { FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
import {
  Container,
  ImageWrapper,
  ContentWrapper,
  Title,
  ContentPreview,
  Footer,
  DatesInfo,
  DateItem,
  Button,
  Header,
} from "./styles";

interface Props {
  id: string;
  image?: string;
  title: string;
  createdDate: string;
  expireDate: string;
  description: string;
}

export const AdItem: FunctionComponent<Props> = ({
  id,
  expireDate,
  createdDate,
  description,
  title,
  image,
}) => {
  return (
    <Container>
      {image && (
        <ImageWrapper>
          <div style={{ backgroundImage: `url(${image})` }} />
        </ImageWrapper>
      )}
      <ContentWrapper style={!image?{borderRadius:8}:{}}>
        <Header>
          <Title>{title}</Title>
          <ContentPreview>{description.length>=1272?description.substring(0,1272).padEnd(1275,"."):description}</ContentPreview>
        </Header>
        <Footer style={!image?{marginTop:"1rem"}:{}}>
          <DatesInfo>
            <DateItem>
              <span>Data de Criação: </span>
              <span>{createdDate}</span>
            </DateItem>

            <DateItem>
              <span>Data de Encerramento: </span>
              <span>{expireDate}</span>
            </DateItem>
          </DatesInfo>
          <Link to={`/ad/${id}`}>
            <Button>
              Ver relato completo
              <ArrowRight size={24} />
            </Button>
          </Link>
        </Footer>
      </ContentWrapper>
    </Container>
  );
};
