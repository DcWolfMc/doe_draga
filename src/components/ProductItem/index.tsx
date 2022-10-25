import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FormEvent, FunctionComponent, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { InputNumberButton, InputNumberContainer, OrderForm, ProductItemContainer, Tags } from "./styles";
interface ProductItemProps {
  image: string;
  name: string;
  tags: string[];
  description: string | undefined;
  price: number;
}
export const ProductItem: FunctionComponent<ProductItemProps> = ({
  image,
  name,
  tags,
  description,
  price,
}) => {
  const {addItemToCart} = useContext(CartContext)
  const [amount, setAmount] = useState<number>(1);
  const isDecreaseDisabled:boolean = (amount <= 1); 
  function increaseAmount(){
    setAmount((prev) => {return prev+1})
  }
  function decreaseAmount(){
    setAmount((prev) => {return prev-1})
    
  }
  function handleSubmit(event:FormEvent){
    event.preventDefault();
    let product={
      image: image,
      name: name,
      price: price,
      amount: amount,
    }
    setAmount(1);
    addItemToCart(product);

  }
  return (
    <ProductItemContainer key={image}>
      <img src={image} alt="" />
      <Tags>
        {tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <strong>{name}</strong>
      <p>{description}</p>
      <OrderForm onSubmit={handleSubmit}>
        <span>
          R$
          <b>{price.toFixed(2).toString().replace(".", ",")}</b>
        </span>
        <InputNumberContainer>
          <InputNumberButton type="button" onClick={decreaseAmount} disabled={isDecreaseDisabled}><Minus size={14} weight='bold' /></InputNumberButton>
          <span>{amount}</span >
          <InputNumberButton type="button" onClick={increaseAmount}> <Plus size={14} weight='bold'/></InputNumberButton>
        </InputNumberContainer>
        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </OrderForm>
    </ProductItemContainer>
  );
};
