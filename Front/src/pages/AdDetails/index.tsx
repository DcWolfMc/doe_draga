import { Box, Modal, CircularProgress } from "@mui/material";
import { QrCodePix } from "qrcode-pix";
import { ChangeEvent, useEffect, useState } from "react";
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
  Button,
  InfoItem,
  ModalContainer,
  QRcodeWrapper,
  ModalRowDivider,
  QRcodeImage,
} from "./styles";

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
  const [image, setImage] = useState<string>(
    "https://i.pinimg.com/564x/a8/7b/c4/a87bc4d12a957a4ed8d0b58e6957b054.jpg"
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string[]>([]);

  //MODAL STATES

  const [open, setOpen] = useState(false);
  const [donationValue, setDonationValue] = useState<number>(0);
  const [QRcode, setQRcode] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function callOne() {

      const qrCodePix: IResponse = QrCodePix({
        version: "01",
        key: "00726768685", //or any PIX key
        name: "Clarisa",
        city: "CEARA",
        transactionId: "152371637", //max 25 characters
      });
      console.log("new data: ", qrCodePix);
      
      return await qrCodePix.base64().then((res: string) => setQRcode(res));
    }
    callOne();
  }, [donationValue]);

  const style = {};

  return (
    <Container>
      <InfoWrapper>
        <ImageContainer>
          {image && (
            <ImageWrapper>
              <div style={{ backgroundImage: `url(${image})` }} />
            </ImageWrapper>
          )}
        </ImageContainer>
        <Button onClick={handleOpen}>DOAR</Button>
        <InfoDetails>
          <InfoItem>
            <span>Inicio do Aúncio:</span>
            <span>20 de Setembro de 2020</span>
          </InfoItem>
          <InfoItem>
            <span>Encerramento do anúncio:</span>
            <span>20 de Abril de 2021</span>
          </InfoItem>
        </InfoDetails>
      </InfoWrapper>
      <ContentContainer>
        <ContentWrapper>
          <TitleText>
            Titulo Ti tulo Titulotitulo Titulotitulo Titulotitulotitulo{" "}
          </TitleText>
          <div>
            <ContentText>
              Turpis egestas pretium aenean pharetra. Parturient montes nascetur
              ridiculus mus mauris. Semper viverra nam libero justo laoreet sit
              amet cursus sit. Quis varius quam quisque id diam. Eget mauris
              pharetra et ultrices neque ornare. Pulvinar sapien et ligula
              ullamcorper malesuada. Consectetur adipiscing elit duis tristique
              sollicitudin. Cras pulvinar mattis nunc sed blandit libero. Eu
              consequat ac felis donec et odio pellentesque. Tellus id interdum
              velit laoreet id donec ultrices.
            </ContentText>
            <ContentText>
              Turpis egestas pretium aenean pharetra. Parturient montes nascetur
              ridiculus mus mauris. Semper viverra nam libero justo laoreet sit
              amet cursus sit. Quis varius quam quisque id diam. Eget mauris
              pharetra et ultrices neque ornare. Pulvinar sapien et ligula
              ullamcorper malesuada. Consectetur adipiscing elit duis tristique
              sollicitudin. Cras pulvinar mattis nunc sed blandit libero. Eu
              consequat ac felis donec et odio pellentesque. Tellus id interdum
              velit laoreet id donec ultrices. Turpis egestas pretium aenean
              pharetra. Parturient montes nascetur ridiculus mus mauris. Semper
              viverra nam libero justo laoreet sit amet cursus sit. Quis varius
              quam quisque id diam. Eget mauris pharetra et ultrices neque
              ornare
            </ContentText>
            <ContentText>
              Turpis egestas pretium aenean pharetra. Parturient montes nascetur
              ridiculus mus mauris. Semper viverra nam libero justo laoreet sit
              amet cursus sit. Quis varius quam quisque id diam. Eget mauris
              pharetra et ultrices neque ornare. Pulvinar sapien et ligula
              ullamcorper malesuada. Consectetur adipiscing elit duis tristique
              sollicitudin. Cras pulvinar mattis nunc sed blandit libero. Eu
              consequat ac felis donec et odio pellentesque. Tellus id interdum
              velit laoreet id donec ultrices. Turpis egestas pretium aenean
              pharetra. Parturient montes nascetur ridiculus mus mauris. Semper
              viverra nam libero justo laoreet sit amet cursus sit. Quis varius
              quam quisque id diam. Eget mauris pharetra et ultrices neque
              ornareTurpis egestas pretium aenean pharetra. Parturient montes
              nascetur ridiculus mus mauris. Semper viverra nam libero justo
              laoreet sit amet cursus sit. Quis varius quam quisque id diam.
              Eget mauris pharetra et ultrices neque ornare. Pulvinar sapien et
              ligula ullamcorper malesuada. Consectetur adipiscing elit duis
              tristique sollicitudin. Cras pulvinar mattis nunc sed blandit
              libero. Eu consequat ac felis donec et odio pellentesque. Tellus
              id interdum velit laoreet id donec ultrices. Turpis egestas
              pretium aenean pharetra. Parturient montes nascetur ridiculus mus
              mauris. Semper viverra nam libero justo laoreet sit amet cursus
              sit. Quis varius quam quisque id diam. Eget mauris pharetra et
              ultrices neque ornare
            </ContentText>
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
