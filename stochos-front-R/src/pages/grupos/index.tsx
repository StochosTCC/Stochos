import CardGrupo from "../../components/Card/CardGrupo";
import grupoData from "./grupos.json";
import userInfo from "../Usuario/userinfo.json";
import style from "./Grupos.module.scss";
import { useState } from "react";
import { Button, Popover } from "@mui/material";
import Formulario from "./Formulario";
import { useQuery } from "react-query";
import axios from "axios";

export default function Grupos() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { data, isLoading, refetch } = useQuery(
    "grupos",
    () =>
      axios
        .get("http://localhost:8080/grupos/todos")
        .then((resp) => resp.data),
    {
      retry: 5,
    }
  );

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  const gruposCriados = Array.isArray(data) ? (
    data.map( (grupo: any) => {
      if (grupo.criador.nomeusuario === userInfo[0].nome) {
        return (
          <div className={style.meta}>
            <CardGrupo
              nomegrupo={grupo.nomegrupo}
              descricao={grupo.descricao}
              funcionariosgrupo={grupo.usuarios}
              config={true}
            />
          </div>
        );
    }
    return null
  })
  ) : null

  const gruposInseridos = Array.isArray(data) ? (
    data.map( (grupo: any) => {

      if ((grupo.criador.nomeusuario !== userInfo[0].nome && grupo.usuarios.length !== 0) || (grupo.criador.nomeusuario === userInfo[0].nome && grupo.usuarios[0].nomeusuario === userInfo[0].nome)) {
        return (
          <div className={style.meta}>
            <CardGrupo
              nomegrupo={grupo.nomegrupo}
              descricao={grupo.descricao}
              funcionariosgrupo={grupo.usuarios}
              config={false}
            />
          </div>
        );
    }
    return null
  })
  ) : null

  return (
    <div className={style.page}>
      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Grupos Criados</h1>
        <div className={style.metas}>
          {gruposCriados}
        </div>
      </div>

      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Seus Grupos</h1>
        <div className={style.metas}>
          {gruposInseridos}
        </div>
      </div>

      <div className={style.divbotao}>
        <Button
          className={style.botao}
          aria-describedby={id}
          onClick={handleClick}
        >
          Criar Grupo
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Formulario refetch={refetch} />
        </Popover>
      </div>
    </div>
  );
}
