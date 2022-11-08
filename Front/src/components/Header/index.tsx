import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart, PlusCircle } from "phosphor-react";
import { HeaderContainer, BlueButton , YellowButton } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={Logo} />
      </Link>
      <nav>
        <Link to="/adList">
        <YellowButton>Lista de anúncios</YellowButton>
        </Link>
        <Link to="/faq">
        <YellowButton>FAQ</YellowButton>
        </Link>
        <Link to="/newAd">
          <BlueButton>CRIAR ANÚNCIO
            <PlusCircle  size={24}/>
          </BlueButton>
        </Link>
        <Link to="/adList"></Link>
        
      </nav>
    </HeaderContainer>
  );
};
