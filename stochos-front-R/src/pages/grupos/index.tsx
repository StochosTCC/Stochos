import CardGrupo from "../../components/Card/CardGrupo";
import grupoData from "./grupos.json";
import userInfo from "../Usuario/userinfo.json";
import style from "./Grupos.module.scss";
import { useState } from "react";
import { Button, Popover } from "@mui/material";
import Formulario from "./Formulario";

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

  return (
    <div className={style.page}>
      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Grupos Criados</h1>
        <div className={style.metas}>
          {grupoData.map((grupo) => {
            if (grupo.criador === userInfo[0].nome) {
              return (
                <div className={style.meta}>
                  <CardGrupo
                    nomegrupo={grupo.nome}
                    descricao={grupo.descricao}
                    funcionariosgrupo={grupo.funcionarios}
                    config={true}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Seus Grupos</h1>
        <div className={style.metas}>
          {grupoData.map((grupo) => {
            if (grupo.criador !== userInfo[0].nome) {
              return (
                <div className={style.meta}>
                  <CardGrupo
                    nomegrupo={grupo.nome}
                    descricao={grupo.descricao}
                    funcionariosgrupo={grupo.funcionarios}
                    config={false}
                  />
                </div>
              );
            }
            return null;
          })}
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
          <Formulario />
        </Popover>
      </div>
    </div>
  );
}
