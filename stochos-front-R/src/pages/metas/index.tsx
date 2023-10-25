import Card from "../../components/Card/CardMeta";
import dataMeta from "./meta.json"
import dataUser from "../Usuario/userinfo.json";
import style from "./Meta.module.scss";
import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Formulario from "./components/Formulario";
import { Modal } from "@mui/material";
import { GrupoMeta } from "../../enums/GrupoMeta/GrupoMeta";
import CardMeta from "../../components/Card/CardMeta";
import {getData} from "../../services/hooks/"

export default function Metas() {
  const {getMetasTodos} = getData();
  const [metas,setMetas] = useState([])

  const callGetData = async () => {
    const metaResponse = await getMetasTodos()

    if(!metaResponse.error){
      setMetas(metaResponse)
    }
  }

  useEffect( () => {
    callGetData()
  }, [])
  console.log(metas)
  let userinfo = dataUser[0];


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
            if (value.remetente === userinfo.nome) {
              return (
                <div className={style.meta}>
                  <CardMeta
                    data={value.data}
                    nome={value.nome}
                    remetente={value.remetente}
                    urgencia={value.urgencia}
                    descricao={value.descricao}
                    destinatarios={value.destinatarios}
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
        <h1 className={style.titulo}>Metas Para Fazer</h1>
        <div className={style.metas}>
          {dataMeta.map((value) => {
            if (value.remetente !== userinfo.nome) {
              return (
                <div className={style.meta}>
                  <CardMeta
                    data={value.data}
                    nome={value.nome}
                    remetente={value.remetente}
                    urgencia={value.urgencia}
                    descricao={value.descricao}
                    destinatarios={value.destinatarios}
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
