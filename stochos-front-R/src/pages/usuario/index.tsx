import { Avatar } from "@mui/material";
import dataUser from "./userinfo.json";
import styles from "./Usuario.module.scss";
import { useQuery } from "react-query";
import axios from "axios";

export default function Usuario() {

  const { data, isLoading } = useQuery(
    "usuarios",
    () =>
      axios
        .get("http://localhost:8080/usuarios/todos")
        .then((resp) => resp.data),
    {
      retry: 5,
    }
  );

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className={styles.posicaoAvatar}>
        <Avatar className={styles.avatar}>
          <p className={styles.letraAvatar}>{dataUser[0].nome[0]}</p>
        </Avatar>
      </div>

      <div className={styles.posicaoitens}>
        
        <div className={styles.itens}>
          <div>
            <p>Nome</p>
            <p className={styles.item}>{dataUser[0].nome}</p>
            <p>E-mail</p>
            <p className={styles.item}>{dataUser[0].email}</p>
            <p>Telefone</p>
            <p className={styles.item}>{dataUser[0].telefone}</p>
          </div>
          <div>
          <p>Cargo</p>
            <p className={styles.item}>{dataUser[0].cargo}</p>
            <p>Setores</p>
            <p className={styles.item}>{dataUser[0].setor}</p>
          </div>
        </div>
      </div>
    </>
  );
}
