import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import { addDays , format,parseISO} from "date-fns";
import { useNavigate, useParams } from "react-router-dom"
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

import { getAdById, UpdatePostById } from "../../services/api";
import { CircularProgress } from "@mui/material";
import { defaultTheme } from "../../styles/themes/default";

export const AdminEditAnnounce: FunctionComponent = () => {
  const { id } = useParams<string>();
  const navigation = useNavigate()
  const [_id, set_id] = useState<string>('')
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
  const [image, setImage] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  
  const [loading, setLoading] = useState<boolean>(false)
  
  useEffect(() => {
    async function callOne() {
      await getAdById(id!)
        .then((res) => {
          let data:Announce = res.data[0]
          console.log("data", data);
          set_id(data._id!)
          setNomeCriador(data.nome_criador)
          setEmail(data.email)
          setTelefone(data.telefone)
          setAdTitle(data.titulo)
          setAdContent(data.texto)
          setInitialDate(data.data_liberacao?format(parseISO(data.data_liberacao),"yyyy-MM-dd"):"");
          setEndDate(data.data_termino?format(parseISO(data.data_termino),"yyyy-MM-dd"):"");
          setPixKey(data.pixKey)
          data.imagem && setImage(data.imagem)
        })
        .catch((res) => {
          console.log(res);
        });
    }

    callOne();
  }, [id]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true)
    let announce: Announce = {
      id: id!,
      email: email,
      nome_criador: nomeCriador,
      telefone: telefone,
      titulo: adTitle,
      texto: adContent,
      status: "analise",
      pixKey: pixKey,
    };
    isEndSpecific
      ? (announce = { ...announce, data_termino: new Date(endDate).toISOString() })
      : (announce = { ...announce, duracao: Number(duration) });
    StartSpecificDate
      ? (announce = { ...announce, data_liberacao: new Date(initialDate).toISOString() })
      : (announce = announce);
      console.log("announce:",announce);
      UpdatePostById(_id!,announce).then(res=>{
        console.log(res);
        navigation("/adAdmin/list")
        
      }).catch((res)=>{
        setLoading(false)
      })
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
                  onChange={(event)=>{setNomeCriador(event.target.value)}}
                />
                <InputTypeTextFlex
                  required
                  type="email"
                  placeholder="E-mail de contato"
                  value={email}
                  onChange={(event)=>{setEmail(event.target.value)}}
                />
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="Telefone com DDD"
                  value={telefone}
                  onChange={(event)=>setTelefone(event.target.value)}
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
                    disabled
                    label="Sim"
                  />
                  <CustomCheckbox
                    checked={!StartSpecificDate}
                    onChange={() => setStartSpecificDate(false)}
                    disabled
                    label="N??o"
                  />
                </CheckBoxWrapper>
                <InputTypeTextFlex
                  disabled={!StartSpecificDate}
                  type={"date"}
                  min={format(addDays(new Date(), 7),"yyyy-MM-dd")}
                  value={initialDate}
                  onChange={(event)=>setInitialDate(event.target.value)}
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
                    <InputTypeTextFlex disabled required type={"date"} min={format(addDays(new Date(), 8),"yyyy-MM-dd")} value={endDate} onChange={(event)=>setEndDate(event.target.value)}/>
                  ) : (
                    <InputTypeTextFlex
                      disabled
                      type={"number"}
                      placeholder="tempo de dura????o do an??ncio (DIAS)"
                      value={duration}
                      required
                      onChange={(event)=>setDuration(event.target.value)}
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
                  <label style={{color:defaultTheme["gray-100"]}}>
                    Deseja adicionar alguma imagem para o seu an??ncio ?
                  </label>
                  <InputFile type="file" name="" id="" />
                </div>
              </AdImageWrapper>
              <AdTitleAndHistory>
                <InputTypeTextFlex
                  type="text"
                  placeholder="Titulo do An??ncio"
                  disabled
                  value={adTitle}
                  onChange={event=>setAdTitle(event.target.value)}
                />

                <TextArea
                  placeholder={"Conte sua hist??ria"}
                  rows={10}
                  required
                  disabled
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
          <LinkButton type="submit">{loading?<CircularProgress size={24} color={"inherit"} />:"Finalizar Cadastro"}</LinkButton>
        </DonationFormWrapper>
      </FormContainer>
    </Container>
  );
};
