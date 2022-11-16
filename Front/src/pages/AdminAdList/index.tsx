import { format, addDays, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Announce } from "../../@types/Announce";
import { getAdList, UpdatePostById,deletePostById } from "../../services/api";
import {
  ActionIconButtonBlue,
  ActionIconButtonGreen,
  ActionIconButtonRed,
  ActionIconButtonYellow,
  HistoryContainer,
  HistoryList,
  StatusDot,
} from "./styles";
import { Check, Article, NotePencil, Trash, Prohibit } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const AdminAdList = () => {
  const [adList, setList] = useState<Announce[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    async function apiCall() {
      await getAdList()
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    async function validateUser() {}
    validateUser();

    apiCall();
  }, []);

  async function handleReleaseAd(adId: string, ad: Announce) {
    await UpdatePostById(adId, {
      ...ad,
      status: "ativo",
      data_liberacao: new Date(),
      data_termino: ad.data_termino
        ? ad.data_termino
        : addDays(new Date(), ad.duracao ? ad.duracao : 0),
    }).then((response)=>{
      console.log("ReleaseAd:", response);
      
    }).catch((error)=>{
      console.log("ReleaseAd error:",error);
      
    });;
  }
  async function handleTerminateAd(adId: string, ad: Announce) {
    await UpdatePostById(adId, {
      ...ad,
      status: "encerrado",
      data_termino: new Date(),
      duracao: differenceInDays(
        ad.data_termino ? ad.data_termino : new Date(),
        ad.data_liberacao ? ad.data_liberacao : new Date()
        ),
      }).then((response)=>{
        console.log("TerminateAd:", response);
        
      }).catch((error)=>{
        console.log("TerminateAd error:",error);
        
      });
    }
    async function handleDeleteAd(adId: string) {
      await deletePostById(adId).then((response)=>{
        console.log("DeleteAd:", response);
        
      }).catch((error)=>{
        console.log("DeleteAd error:",error);
        
      });
    }
  return (
    <HistoryContainer>
      <h1> Lista de Anúncio </h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Termino</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {adList.map((ad) => {
              return (
                <tr key={ad.id}>
                  <td>{ad.titulo}</td>
                  <td>{ad.duracao ? `${ad.duracao} dias` : "-"}</td>
                  <td>
                    {ad.data_liberacao
                      ? format(ad.data_liberacao, "dd/MMMM/yyyy", {
                          locale: ptBR,
                        })
                      : "-"}
                  </td>
                  <td>
                    {ad.data_termino
                      ? format(ad.data_termino, "dd/MMMM/yyyy", {
                          locale: ptBR,
                        })
                      : "-"}
                  </td>
                  <td>
                    {ad.status == "ativo" && (
                      <StatusDot statusColor="green">Ativo</StatusDot>
                    )}
                    {ad.status == "encerrado" && (
                      <StatusDot statusColor="red">Encerrado</StatusDot>
                    )}
                    {ad.status == "analise" && (
                      <StatusDot statusColor="yellow">Em Analise</StatusDot>
                    )}
                  </td>
                  <td>
                    <ActionIconButtonYellow
                      style={{ marginRight: "1rem" }}
                      onClick={() => navigation(`/adAdmin/Edit/${ad.id}`)}
                    >
                      <NotePencil size={24} />
                    </ActionIconButtonYellow>

                    <ActionIconButtonBlue
                      style={{ marginRight: "1rem" }}
                      onClick={() => navigation(`/adAdmin/${ad.id}`)}
                    >
                      <Article size={24} />
                    </ActionIconButtonBlue>

                    <ActionIconButtonRed style={{ marginRight: "1rem" }}
                    onClick={() => {
                      handleDeleteAd(ad.id);
                    }}
                    >
                      <Trash size={24} />
                    </ActionIconButtonRed>

                    {ad.status == "ativo" && (
                      <ActionIconButtonRed
                        style={{ marginRight: "1rem" }}
                        onClick={() => {
                          handleTerminateAd(ad.id, ad);
                        }}
                      >
                        <Prohibit size={24} />
                      </ActionIconButtonRed>
                    )}

                    {ad.status == "analise" && (
                      <ActionIconButtonGreen
                        style={{ marginRight: "1rem" }}
                        onClick={() => {
                          handleReleaseAd(ad.id, ad);
                        }}
                      >
                        <Check size={24} weight={"bold"} />
                      </ActionIconButtonGreen>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
