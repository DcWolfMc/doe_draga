import { Modal, CircularProgress } from "@mui/material";
import { QrCodePix } from "qrcode-pix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdById } from "../../services/api";
import {
  Container,
  ContentText,
  ContentContainer,
  ImageContainer,
  ImageWrapper,
  InfoDetails,
  InfoWrapper,
  TitleText,
  ContentWrapper,
  ButtonWrapper,
  Button,
  InfoItem,
  ModalContainer,
  QRcodeWrapper,
  ModalRowDivider,
  QRcodeImage,
} from "./styles";
import Imageplaceholder from "../../assets/image_placeholder.png";
import { Announce } from "../../@types/Announce";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import { defaultTheme } from "../../styles/themes/default";

interface IParameter {
  version: string;
  key: string;
  city: string;
  name: string;
  transactionId?: string;
  currency?: number; //default: 986 ('R$')
  countryCode?: string; //default: 'BR'
}

interface IResponse {
  payload: () => string; //payload for QrCode
  base64: (options?: any) => Promise<string>; //QrCode image base64
}

export const AdDetails = () => {
  const { id } = useParams<string>();
  const [data, setData] = useState<Announce>({
    id: "",
    email: "",
    nome_criador: "",
    telefone: "",
    duracao: 0,
    titulo: "",
    pixKey: "",
    texto: "",
    imagem: "",
    status: "ativo",
  });

  //MODAL STATES
  const [open, setOpen] = useState(false);
  const [QRcode, setQRcode] = useState("");
  const [loading, setLoading] = useState<boolean>(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createdDate = format(
    data.data_liberacao ? parseISO(data.data_liberacao) : new Date(),
    "dd 'de' MMMM  'de' yyyy",
    {
      locale: ptBR,
    }
  );
  const expireDate = format(
    data.data_termino ? parseISO( data.data_termino) : new Date(),
    "dd 'de' MMMM  'de' yyyy",
    {
      locale: ptBR,
    }
  );
  useEffect(() => {
    async function callOne() {
      setLoading(true)
      await getAdById(id!)
        .then((res) => {
          console.log("res.data", res.data[0]);
          setData(res.data[0]);
          setLoading(false)
        })
        .catch((res) => {
          console.log(res);
          setLoading(false)
        });
    }

    callOne();
  }, [id]);
  
const textFormated = data.texto.split("\n")
console.log("textFormated",textFormated);

  useEffect(() => {
    async function generateQRcode() {
      const qrCodePix: IResponse = QrCodePix({
        version: "01",
        key: data.pixKey, //or any PIX key
        name: data.nome_criador,
        city: "CEARA",
        transactionId: "152371637", //max 25 characters
      });
      console.log("new data: ", qrCodePix);

      return await qrCodePix.base64().then((res: string) => setQRcode(res));
    }

    if (data.pixKey != "") {
      generateQRcode();
    }
  }, [data]);

  const style = {};

  return (
    <Container>
      <InfoWrapper>
        <ImageContainer>
          
          {data.imagem && data.imagem != "" ? (
            <ImageWrapper>

              <div style={{ backgroundImage: `url(${data.imagem})` }} />
            </ImageWrapper>
          ) : (
            <ImageWrapper>
              <img src={Imageplaceholder} />
            </ImageWrapper>
          )}
        </ImageContainer>
        <ButtonWrapper>
        <Button onClick={handleOpen}>DOAR</Button>
        </ButtonWrapper>
        <InfoDetails>
          <InfoItem>
            <span>Inicio do Aúncio:</span>
            <span>{createdDate}</span>
          </InfoItem>
          <InfoItem>
            <span>Encerramento do anúncio:</span>
            <span>{expireDate}</span>
          </InfoItem>
        </InfoDetails>
      </InfoWrapper>
      <ContentContainer>
        <ContentWrapper>
        {loading && (
          <div
            style={{
              flex:1,
              padding:"0.5rem",
              width: "100%",
              color: defaultTheme["blue-500"],
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </div>
        )}
          <TitleText>{data.titulo}</TitleText>
          <div>
            {
              textFormated.map((p)=>{
                return<ContentText>{p}</ContentText>
              })
            }
            
          </div>
        </ContentWrapper>
      </ContentContainer>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <TitleText>Painel de Doação</TitleText>
          <ModalRowDivider>
            <QRcodeWrapper>
              {QRcode == "" ? (
                <CircularProgress />
              ) : (
                <QRcodeImage src={`${QRcode}`} />
              )}
              <span>Leia o QRcode em sua Zona Pix de preferencia.</span>
            </QRcodeWrapper>
          </ModalRowDivider>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
