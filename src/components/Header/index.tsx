import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Badge, CartButton, HeaderContainer, LocationField } from "./styles";
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
        <LocationField>
          <MapPin weight="fill" size={24} />
          <span>Fortaleza, CE</span>
        </LocationField>
        <Link to="/cart">
          <CartButton>
            <ShoppingCart weight="fill" size={24} />
          
          {cart.length > 0 && (
            <Badge>
              {cart.reduce((acc,product)=> {return acc+product.amount},0)}
            </Badge>
          )}
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  );
};
