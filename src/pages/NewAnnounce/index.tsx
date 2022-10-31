import React, { FunctionComponent, useState,ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
import { StyledDropzone } from "../../components/StyledDropzone";

interface Anuncio {
  id: string;
  email: string;
  nome_criador: string;
  telefone: string;
  data_criacao: Date;
  data_liberacao: Date;
  data_termino: Date;
  duracao?: number;
  tipo_pix: string;
  whats_app_link?: string;
  titulo: string;
  texto: string[];
  imagem?: string;
  status: "ativo" | "encerrado" | "analise";
}

export const NewAnnounce: FunctionComponent = () => {
  const [nomeCriador, setNomeCriador] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [adTitle, setAdTitle] = useState<string>("");
  const [adContent, setAdContent] = useState<string>("");
  const [isStartSpecific, setIsStartSpecific] = useState<boolean>(false);
  const [isEndSpecific, setIsEndSpecific] = useState<boolean>(false);
  const [pixKey, setPixKey] = useState<string>('');
  const [pix, setPix] = useState<string>('');
  const [image, setImage] = useState<[]>([]);

  function handleSubmit(e:FormEvent) {
    e.preventDefault
    
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <AdFormWrapper>
          <AdFormHeaderWrapper>
            <AdContactInfo>
              <TitleText> Informações para Contato</TitleText>
              <div>
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="Nome do Anunciante"
                />
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="E-mail de contato"
                />
                <InputTypeTextFlex
                  required
                  type="text"
                  placeholder="Telefone com DDD"
                />
                <p>
                  Essas informações são importantes para que possamos validar a
                  sua história
                </p>
              </div>
            </AdContactInfo>
            <AdDateInfo>
              <TitleText>Informe as datas do seu anúncio</TitleText>
              <div>
                <CheckBoxWrapper>
                  <label>
                    Deseja iniciar o anúncio em alguma data em específico?
                  </label>
                  <CustomCheckbox
                    checked={isStartSpecific}
                    onChange={() => setIsStartSpecific(true)}
                    label="Sim"
                  />
                  <CustomCheckbox
                    checked={!isStartSpecific}
                    onChange={() => setIsStartSpecific(false)}
                    label="Não"
                  />
                </CheckBoxWrapper>
                <InputTypeTextFlex type={"date"} />

                <div>
                  <label>
                    Como você deseja declarar o encerramento do seu anúncio ?
                  </label>
                  <CheckBoxWrapper>
                    <CustomCheckbox
                      checked={isEndSpecific}
                      onChange={() => setIsEndSpecific(true)}
                      label="Data específica"
                    />
                    <CustomCheckbox
                      checked={!isEndSpecific}
                      onChange={() => setIsEndSpecific(false)}
                      label="Tempo de duração apos ser validado( em dias)"
                    />
                  </CheckBoxWrapper>
                  {isEndSpecific ? (
                    <InputTypeTextFlex type={"date"} />
                  ) : (
                    <InputTypeTextFlex type={"text"} />
                  )}
                </div>
              </div>
            </AdDateInfo>
          </AdFormHeaderWrapper>
          <AdFormContentWrapper>
            <TitleText>Crie o seu Anúncio</TitleText>
            <AdFormContentFields>
              <AdImageWrapper>
                <div>
                  <label>
                    Deseja adicionar alguma imagem para o seu anúncio ?
                  </label>
                  <InputFile type={"file"} name="" id="" />
                </div>
              </AdImageWrapper>
              <AdTitleAndHistory>
                <InputTypeTextFlex type="text" />

                <TextArea
                  placeholder={"Conte sua história"}
                  rows={10}
                  onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setAdContent(e.target.value)}
                />
              </AdTitleAndHistory>
            </AdFormContentFields>
          </AdFormContentWrapper>
        </AdFormWrapper>
        <DonationFormWrapper>
          <TitleText>
            Informe para a doação
            </TitleText>
            <div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chave Pix</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pixKey}
                  label="Age"
                  onChange={(e: SelectChangeEvent)=>{setPixKey(e.target.value)}}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <InputTypeTextFlex value={pix} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPix (e.target.value)}} type="text" placeholder="Pix" />
            </div>
            <LinkButton type="submit">Finalizar Cadastro</LinkButton>
        </DonationFormWrapper>
      </FormContainer>
    </Container>
  );
};
