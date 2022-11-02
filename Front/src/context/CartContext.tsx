import { createContext, FunctionComponent, ReactNode, useState } from "react";
interface Product {
  image: string;
  name: string;
  price: number;
  amount: number;
}
interface FormData{
  cart?: Product[];
  cep: string;
  address: string;
  city: string;
  neighbor: string;
  uf: string;
  complement?: string;
  number: string;
  payMethod: "creditcard" | "debit" | "money"| "";
  totalItemValue: number;
  deliveryFee: number;
}
interface CartContextType {
  cart: Product[];
  formData: FormData
  addItemToCart: (product: Product) => void;
  increaseByOne: (product: Product) => void;
  decreaseByOne: (product: Product) => void;
  removeItemFromCart:(product: Product) => void;
  confirmSalesOrder: (SalesOrder: FormData)=> void
  emptyList:()=> void
}
interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export const CartContextProvider: FunctionComponent<
  CartContextProviderProps
> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [formData, setFormData] = useState<FormData>({
    cep: "",
    address: "",
    city: "",
    neighbor: "",
    uf: "",
    complement: "",
    number: "",
    payMethod: "",
    totalItemValue: 0,
    deliveryFee: 3.50,
  })
  
  function addItemToCart(productToAdd: Product) {
    console.log("adicionando item", productToAdd);
    let productIndex: number = cart.findIndex((product) => {
        return product.name === productToAdd.name;
    });
    console.log(productIndex);
    
    if (productIndex >= 0 ) {
        let updatatedAmount = (cart[productIndex].amount + productToAdd.amount) 
        setCart((state)=>[...state.slice(0,productIndex),{...productToAdd, amount: updatatedAmount},...state.slice(productIndex+1)])
    } else {
      setCart((state) => {
        return [...state, productToAdd];
      });
    }
    
  }
  function removeItemFromCart(productToRemove:Product) {
    let productIndex = cart.findIndex((item)=>{return item.name === productToRemove.name});
    setCart((state)=>[...state.slice(0,productIndex),...state.slice(productIndex+1)])
  }
  function decreaseByOne(product: Product) {
    if(product.amount == 1){
      return removeItemFromCart(product)
    }
    let productIndex = cart.findIndex((item)=>{return item.name === product.name});
    let ItemToEdit = {...product, amount: (product.amount-1)}
    console.log(productIndex);
    if (productIndex >= 0 ) { 
      return setCart((state)=>[...state.slice(0,productIndex),ItemToEdit,...state.slice(productIndex+1)])
    } else {
      return setCart((state) => {
      return [...state, product];
      });
    }
    
  }
  function increaseByOne(product: Product) {
    
      let productIndex = cart.findIndex((item)=>{return item.name === product.name});
      let ItemToEdit = {...product, amount: (product.amount+1)}
      console.log(productIndex);
      if (productIndex >= 0 ) { 
        return setCart((state)=>[...state.slice(0,productIndex),ItemToEdit,...state.slice(productIndex+1)])
      } else {
        return setCart((state) => {
        return [...state, product];
        });
      }
  }
  function confirmSalesOrder(SalesOrder: FormData){
    setFormData({...SalesOrder, cart:cart })
    
  }
  function emptyList(){
    setCart([])
  }

  console.log('cart', cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        formData,
        addItemToCart,
        increaseByOne,
        decreaseByOne,
        removeItemFromCart,
        confirmSalesOrder,
        emptyList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
