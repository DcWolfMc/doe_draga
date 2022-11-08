import {  Minus, Plus, Trash } from "phosphor-react";
import { CartItemContainer, InputNumberContainer, InputNumberButton, RemoveButton, ActionContainer, ItemDetails, } from "./styles";
import { FunctionComponent, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
interface CartItemProps {
  name: string;
}
export const CartItem:FunctionComponent<CartItemProps> = ({name}) => {
  const { cart, increaseByOne, decreaseByOne,removeItemFromCart  } = useContext(CartContext)
  const item = cart.find((item)=>item.name === name)!
  const totalItemPrice = item && item?.amount*item?.price

  function handleIncreaseButton(){
    increaseByOne(item)
  }
  function handleDecreaseButton(){
    decreaseByOne(item)
  }
  function handleRemoveButton() {
    removeItemFromCart(item)    
  }

  return (
    <div>
    <CartItemContainer>
      <div>
        <img src={item?.image} alt="" />
        <ItemDetails>
          <span>{item?.name}</span>
          <ActionContainer>
            <InputNumberContainer>
              <InputNumberButton type="button" onClick={handleDecreaseButton}>
                <Minus size={14} weight="bold" />
              </InputNumberButton>
              <span>{item?.amount}</span>
              <InputNumberButton type="button" onClick={handleIncreaseButton}>
                <Plus size={14} weight="bold" />
              </InputNumberButton>
            </InputNumberContainer>
            <RemoveButton type="button" onClick={handleRemoveButton}>
                <Trash size={16} color="#8047F8"/>
                Remover
            </RemoveButton>
          </ActionContainer>
        </ItemDetails>
      </div>
      <span>{`R$ ${totalItemPrice?.toFixed(2).replace('.',',')}`}</span>
    </CartItemContainer>
    </div>
  );
};
