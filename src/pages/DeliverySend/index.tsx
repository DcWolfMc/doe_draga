import { ArrowLeft, CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Content, ContentInfo, DeliverySendContainer, InfoIcons, ReturnButton } from "./styles"
import Image from '../../assets/delivery.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const DeliverySend = ()=>{
    
    const {formData } = useContext(CartContext)
    return(
        <DeliverySendContainer>
            <div>
                <strong>Uhu! Pedido confirmado</strong>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <Content>
            <ContentInfo>
                <div>
                <InfoIcons backgroundColor="purple">
                    <MapPin size={16} weight="fill"/>
                </InfoIcons>
                <p>Entrega em <b>{`${formData.address}, ${formData.number}`}</b><br/>
                {`${formData.neighbor} - ${formData.city}, ${formData.uf}`}</p>
                </div>
                <div>
                    <InfoIcons backgroundColor="yellow">
                        <Timer size={16} weight="fill"/>
                    </InfoIcons>
                    <p> Previsão de entrega<br/><b>20 min - 30 min </b></p>
                </div>
                <div>
                    <InfoIcons backgroundColor="brown">
                        <CurrencyDollar size={16} />
                    </InfoIcons>
                    <p> Pagamento na entrega<br/><b>{`${formData.payMethod}`}</b></p>
                </div>
            </ContentInfo>
            <img src={Image} alt="" />
            </Content>
            <Link to={"/"}>
                <ReturnButton><ArrowLeft size={24}/>Voltar para a Loja</ReturnButton>
            </Link>
        </DeliverySendContainer>
    )
}