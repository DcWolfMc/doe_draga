import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Announce } from "../../@types/Announce";
import {
  Container,
  FormContainer,
  AdFormWrapper,
  AdFormContentWrapper,
  AdFormHeaderWrapper,
  DonationFormWrapper,
  AdContactInfo,
  AdDateInfo,
  CheckBoxWrapper,
  AdFormContentFields,
  TitleText,
  AdImageWrapper,
  AdTitleAndHistory,
  InputFile,
  LinkButton,
  InputTypeTextFlex,
  TextArea,
} from "./styles";

import { createAnnounce, } from "../../services/api";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

interface SnackbarType {
  open: boolean;
  type: "error" | "warning" | "info" | "success";
}
export const NewAnnounce: FunctionComponent = () => {
  const navigation = useNavigate();
  const [nomeCriador, setNomeCriador] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [adTitle, setAdTitle] = useState<string>("");
  const [adContent, setAdContent] = useState<string>("");
  const [StartSpecificDate, setStartSpecificDate] = useState<boolean>(false);
  const [initialDate, setInitialDate] = useState<string>("");
  const [isEndSpecific, setIsEndSpecific] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<string>("");
  const [pixKey, setPixKey] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [base64Image, setbase64Image] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackbarType>({
    open: false,
    type: "success",
  });
  const [snackMessage, setSnackMessage] = useState<string>("");

  let teste: Announce = {
    id: "0",
    email: email,
    nome_criador: nomeCriador,
    telefone: telefone,
    titulo: adTitle,
    texto: adContent,
    status: "analise",
    pixKey: pixKey,
    data_liberacao:
      initialDate != ""
        ? new Date(initialDate).toISOString()
        : new Date().toISOString(),
    data_termino:
      endDate != ""
        ? new Date(endDate).toISOString()
        : new Date().toISOString(),
    duracao: Number(duration),
  };

  //console.log(teste);
  function handleClick(
    message: string,
    type: "error" | "warning" | "info" | "success"
  ) {
    setSnackMessage(message);
    setSnackbar({ open: true, type: type });
  }

  function handleClose(){
    setSnackbar((prev) => {
      return { ...prev, open: false };
    });
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    let announce: Announce = {
      id: uuidv4(),
      email: email,
      nome_criador: nomeCriador,
      telefone: telefone,
      titulo: adTitle,
      texto: adContent,
      status: "analise",
      pixKey: pixKey,
    };
    base64Image != ""
      ? (announce = { ...announce, imagem: base64Image })
      : null;
    isEndSpecific
      ? (announce = {
          ...announce,
          data_termino: new Date(endDate).toISOString(),
        })
      : (announce = { ...announce, duracao: Number(duration) });
    StartSpecificDate
      ? (announce = {
          ...announce,
          data_liberacao: new Date(initialDate).toISOString(),
        })
      : (announce = announce);
    console.log("announce:", announce);
    createAnnounce(announce)
      .then((res) => {
        handleClick("An??ncio criado com sucesso! \n Voc?? ser?? movido automaticamente!", "success");
        console.log(res);
        
        
      })
      .catch((res) => {
        handleClick(
          "algo deu errado na cria????o do anuncio. Verifique se esta tudo corretamente preenchido",
          "error"
        );
        setLoading(false);
      });
  }


  async function getBase64(file: File) {
    return new Promise((resolve) => {
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        //console.log("Called", reader);
        let baseURL = reader.result;
        //console.log("baseURL:",baseURL);
        resolve(baseURL);
      };
    });
  }

  function handleFileInputChange(e: Event<HTMLInputElement>) {
    //console.log('file[0]',e.target.files[0]);
    if (e.target) {
      let file = e.target.files[0];

      getBase64(file)
        .then((result) => {
          setbase64Image(result as string);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setbase64Image("");
    }
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <AdFormWrapper>
          <AdFormHeaderWrapper>
            <AdContactInfo>
              <TitleText> Informa????es para Contato</TitleText>
              <div>
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="Nome do Anunciante"
                  value={nomeCriador}
                  onChange={(event) => {
                    setNomeCriador(event.target.value);
                  }}
                />
                <InputTypeTextFlex
                  required
                  type="email"
                  placeholder="E-mail de contato"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="Telefone com DDD"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
                <p>
                  Essas informa????es s??o importantes para que possamos validar a
                  sua hist??ria
                </p>
              </div>
            </AdContactInfo>
            <AdDateInfo>
              <TitleText>Informe as datas do seu an??ncio</TitleText>
              <div>
                <CheckBoxWrapper>
                  <label>
                    Deseja iniciar o an??ncio em alguma data em espec??fico?
                  </label>
                  <CustomCheckbox
                    checked={StartSpecificDate}
                    onChange={() => setStartSpecificDate(true)}
                    label="Sim"
                  />
                  <CustomCheckbox
                    checked={!StartSpecificDate}
                    onChange={() => setStartSpecificDate(false)}
                    label="N??o"
                  />
                </CheckBoxWrapper>
                <InputTypeTextFlex
                  required={StartSpecificDate}
                  disabled={!StartSpecificDate}
                  type={"date"}
                  min={format(addDays(new Date(), 7), "yyyy-MM-dd")}
                  value={initialDate}
                  onChange={(event) => setInitialDate(event.target.value)}
                />

                <div>
                  <label>
                    Como voc?? deseja declarar o encerramento do seu an??ncio ?
                  </label>
                  <CheckBoxWrapper>
                    <CustomCheckbox
                      checked={isEndSpecific}
                      onChange={() => setIsEndSpecific(true)}
                      label="Data espec??fica"
                    />
                    <CustomCheckbox
                      checked={!isEndSpecific}
                      onChange={() => setIsEndSpecific(false)}
                      label="Tempo de dura????o apos ser validado( em dias)"
                    />
                  </CheckBoxWrapper>
                  {isEndSpecific ? (
                    <InputTypeTextFlex
                      required={isEndSpecific}
                      type={"date"}
                      min={format(addDays(new Date(), 8), "yyyy-MM-dd")}
                      value={endDate}
                      onChange={(event) => setEndDate(event.target.value)}
                    />
                  ) : (
                    <InputTypeTextFlex
                      type={"number"}
                      placeholder="tempo de dura????o do an??ncio (DIAS)"
                      value={duration}
                      required={!isEndSpecific}
                      onChange={(event) => setDuration(event.target.value)}
                    />
                  )}
                </div>
              </div>
            </AdDateInfo>
          </AdFormHeaderWrapper>
          <AdFormContentWrapper>
            <TitleText>Crie o seu An??ncio</TitleText>
            <AdFormContentFields>
              <AdImageWrapper>
                <div>
                  <label>
                    Deseja adicionar alguma imagem para o seu an??ncio ?
                  </label>
                  <InputFile
                    type="file"
                    name=""
                    id=""
                    accept="image/*"
                    onChange={handleFileInputChange}
                  />
                </div>
              </AdImageWrapper>
              <AdTitleAndHistory>
                <InputTypeTextFlex
                  type="text"
                  placeholder="Titulo do An??ncio"
                  required
                  value={adTitle}
                  onChange={(event) => setAdTitle(event.target.value)}
                />

                <TextArea
                  placeholder={"Conte sua hist??ria"}
                  rows={10}
                  required
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setAdContent(e.target.value)
                  }
                />
              </AdTitleAndHistory>
            </AdFormContentFields>
          </AdFormContentWrapper>
        </AdFormWrapper>
        <DonationFormWrapper>
          <TitleText>Informe para a doa????o</TitleText>
          <div>
            <InputTypeTextFlex
              value={pixKey}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPixKey(e.target.value);
              }}
              required
              type="text"
              placeholder="Chave PIX do que receber?? o dinheiro"
            />
          </div>
          <LinkButton disabled={loading} type="submit">
            {loading ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              "Finalizar Cadastro"
            )}
          </LinkButton>
        </DonationFormWrapper>
      </FormContainer>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={snackbar.type == "success"?
        ()=>{handleClose();navigation("/adList"); }
        :handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
      
    </Container>
  );
};
