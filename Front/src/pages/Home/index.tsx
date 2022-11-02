import { Coffees } from "../../utils/coffees";
import {
  Cover,
  CoverContent,
  CoverTitle,
  HomeContainer,
  Info,
  LinkButton,
  Menu,
} from "./styles";
import Image from "../../assets/cover-image.png";
import { ProductItem } from "../../components/ProductItem";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <HomeContainer>
      <Cover>
        <CoverContent>
          <CoverTitle>
            <h1>Encontre e ajude a causa que você acredita!</h1>
            <p>
              Busque por diversas causas variadas e auxilie os sonhos daqueles
              com quem se identificou
            </p>
          </CoverTitle>
          <Info>
            <Link to={"/cart"}>
              <LinkButton>Buscar Por Anúncios</LinkButton>
            </Link>
          </Info>
        </CoverContent>
        <img src={Image} alt="" />
      </Cover>
      
    </HomeContainer>
  );
};
