import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart, PlusCircle } from "phosphor-react";
import { HeaderContainer, BlueButton , YellowButton } from "./styles";
import { useContext, useEffect, useState } from "react";

export const AdminHeader = () => {

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={Logo} />
      </Link>
      <nav>
        <h1>Admin Zone</h1>
      </nav>
    </HeaderContainer>
  );
};
