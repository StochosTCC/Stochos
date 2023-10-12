import Card from "../../components/Card";
import dataMeta from "./meta.json";
import dataUser from "../usuario/userinfo.json";
import style from "./Meta.module.scss";
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Formulario from "./components/Formulario";
import { Modal } from "@mui/material";

export default function Metas() {
  let userinfo = dataUser[0];
  console.log(userinfo);
  console.log(dataUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        <h1 className={style.titulo}>Metas Criadas</h1>
        <div className={style.metas}>
          {dataMeta.map((value) => {
            if (value.nomeremetente === userinfo.nome) {
              return (
                <div className={style.meta}>
                  <Card
                    type="meta"
                    data={value.data}
                    nome={value.nome}
                    nomeremetente={value.nomeremetente}
                    urgencia={value.urgencia}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Metas Para Fazer</h1>
        <div className={style.metas}>
          {dataMeta.map((value) => {
            if (value.nomeremetente !== userinfo.nome) {
              return (
                <div className={style.meta}>
                  <Card
                    type="meta"
                    data={value.data}
                    nome={value.nome}
                    nomeremetente={value.nomeremetente}
                    urgencia={value.urgencia}
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
          Criar Meta
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
