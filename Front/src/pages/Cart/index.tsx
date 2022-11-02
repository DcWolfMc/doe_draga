
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CartItem } from "../../components/CartItem";
import { CartContext } from "../../context/CartContext";
import { getCepInformation } from "../../services/api";
import {
  CartContainer,
  FormSection,
  CartForm,
  CartItemBox,
  FormSectionTitle,
  FormInputSection,
  Info,
  InputTypeNumber,
  InputTypeText,
  InputTypeTextFlex,
  InputTypeTextSmall,
  CartInfo,
} from "./styles";
interface formData {
  
    cep: string;
    address: string;
    number: string;
    complement?: string;
    neighbor: string;
    city: string;
    uf: string;
    payMethod: "creditcard" | "debit" | "money"| "";
  
}
export const Cart = () => {
  const { cart, confirmSalesOrder, emptyList } = useContext(CartContext)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, getValues } = useForm<formData>(
    {defaultValues:{
        cep: "",
        city: "",
        complement: "",
        neighbor: "",
        number: "",
        payMethod: "",
        address: "",
        uf: "",
      }
    }
  );
  const [allItensValue, setAllItensValue] = useState<number>(0)
  const isCartempty = cart.length <= 0;
  const payMethod = watch("payMethod");
  const cep = watch('cep')
  const payMethodIsEmpty = !payMethod;
  
  useEffect(()=>{
     let totalCartItemsValue = cart.reduce((acc, item)=>{
        return acc + (item.price * item.amount)
      },0)
      setAllItensValue(totalCartItemsValue)
  },[cart, isCartempty])
   
  function maskCEP(value:string) {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  }
  async function fetchCepInformation() {
    console.log(cep);
    await getCepInformation(cep)
    .then((response)=>{
      console.log(response);
      setValue("city",response.data.localidade)
      setValue("address",response.data.logradouro)
      setValue("neighbor",response.data.bairro)
      setValue("uf",response.data.uf)
    })
    console.log("procurando dados ao desfocar input de CEP.");
  }

  function handleValidateFormInfo() {
    let formData = getValues()
    confirmSalesOrder({ ...formData, totalItemValue:allItensValue, deliveryFee:3.5   })
    emptyList()
    console.log(getValues());
    navigate('/deliverySend')
    
  }

  return (
    <CartContainer>
      <CartForm onSubmit={handleSubmit(handleValidateFormInfo)}>
        <div>
          <h2>Complete seu pedido</h2>
          <FormSection>
            <FormSectionTitle>
              <MapPinLine size={22} color="#DBAC2C" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormSectionTitle>
            <FormInputSection>
              <InputTypeText
                className={`${!watch("cep") && "requiredField"}`}
                type="text"
                placeholder="CEP"
                {...register("cep",{onChange: (event)=>{
                  const {value} = event.target
                  event.target.value = maskCEP(value)
                },onBlur:()=>fetchCepInformation()})}
                required
              />
              <InputTypeTextFlex
                className={`${!watch("address") && "requiredField"}`}
                type="text"
                
                placeholder="Rua"
                {...register("address")}
                required
              />
              <Info>
                <InputTypeNumber
                  className={`${!watch("number") && "requiredField"}`}
                  type="number"
                  
                  placeholder="Número"
                  {...register("number")}
                  required
                />
                <InputTypeTextFlex
                  type="text"
                  
                  placeholder="Complemento"
                  {...register("complement")}
                />
              </Info>
              <Info>
                <InputTypeText
                  className={`${!watch("neighbor") && "requiredField"}`}
                  type="text"
                  
                  placeholder="Bairro"
                  {...register("neighbor")}
                  required
                />
                <InputTypeTextFlex
                  className={`${!watch("city") && "requiredField"}`}
                  type="text"
                  
                  placeholder="Cidade"
                  {...register("city")}
                  required
                />
                <InputTypeTextSmall
                  className={`${!watch("uf") && "requiredField"}`}
                  style={{ textAlign: "center", textTransform: "uppercase" }}
                  type="text"
                  
                  placeholder="UF"
                  maxLength={2}
                  {...register("uf", { maxLength: 2 })}
                  required
                />
              </Info>
            </FormInputSection>
          </FormSection>
          <FormSection>
            <FormSectionTitle>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormSectionTitle>
            <Info>
              <label
                className={`${payMethodIsEmpty && "requiredField"} ${
                  payMethod === "creditcard" && "active"
                }`}
              >
                <input
                  hidden
                  type="radio"
                  value="creditcard"
                  id="creditCard"
                  {...register("payMethod")}
                />
                <CreditCard color="#8047F8" /> cartão de crédito
              </label>

              <label
                className={`${payMethodIsEmpty && "requiredField"} ${
                  payMethod === "debit" && "active"
                }`}
              >
                <input
                  hidden
                  type="radio"
                  value="debit"
                  id="debit"
                  {...register("payMethod")}
                />
                <Bank color="#8047F8" /> cartão de débito
              </label>

              <label
                className={`${payMethodIsEmpty && "requiredField"} ${
                  payMethod === "money" && "active"
                }`}
              >
                <input
                  hidden
                  type="radio"
                  value="money"
                  id="money"
                  {...register("payMethod")}
                />
                <Money color="#8047F8" /> dinheiro
              </label>
            </Info>
          </FormSection>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CartItemBox>
            {cart.map((item)=> {return (
            <>
              <CartItem key={item.name} name={item.name} />
              <hr />
            </>
            )})}
            <CartInfo>
              <div>
                <span>Total de itens</span> <span>R${allItensValue.toFixed(2).replace('.',',')}</span>
              </div>
              <div>
                <span>Entrega</span> <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong> <strong>R$ {(allItensValue+3.5).toFixed(2).replace('.',',')}</strong>
              </div>
            </CartInfo>
            <button type="submit" disabled={isCartempty}>confirmar pedido</button>
          </CartItemBox>
        </div>
      </CartForm>
    </CartContainer>
  );
};
