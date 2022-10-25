import { Coffees } from "../../utils/coffees";
import {
  Cover,
  CoverContent,
  CoverTitle,
  HomeContainer,
  Info,
  InfoIcons,
  Menu,
} from "./styles";
import Image from "../../assets/cover-image.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ProductItem } from "../../components/ProductItem";
export const Home = () => {
  return (
    <HomeContainer>
      <Cover>
        <CoverContent>
          <CoverTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </CoverTitle>
          <Info>
            <span>
              <InfoIcons backgroundColor="brown">
                <ShoppingCart size={16} weight="fill" />
              </InfoIcons>
              Compra simples e segura
            </span>
            <span>
              <InfoIcons backgroundColor="black">
                <Package size={16} weight="fill" />
              </InfoIcons>
              Embalagem mantém o café intacto
            </span>
            <span>
              <InfoIcons backgroundColor="yellow">
                <Timer size={16} weight="fill" />
              </InfoIcons>
              Entrega rápida e rastreada
            </span>
            <span>
              <InfoIcons backgroundColor="purple">
                <Coffee size={16} weight="fill" />
              </InfoIcons>
              O café chega fresquinho até você
            </span>
          </Info>
        </CoverContent>
        <img src={Image} alt="" />
      </Cover>
        <h1>Nossos Cafés</h1>
      <Menu>
        {Coffees.map((coffee) => {
          return (
            <ProductItem
              key={coffee.image}
              description={coffee.description}
              image={coffee.image}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags!}
            />
          );
        })}
      </Menu>
    </HomeContainer>
  );
};
