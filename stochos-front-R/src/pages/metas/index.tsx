import Card from "../../components/Card/CardMeta";
import dataUser from "../Usuario/userinfo.json";
import style from "./Meta.module.scss";
import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Formulario from "./components/Formulario";

import CardMeta from "../../components/Card/CardMeta";
import {getData} from "../../services/hooks/"
import { useQuery } from "react-query";
import axios from "axios";

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
  let userinfo = dataUser[0];

//criar modo de ver que a meta pertence a um grupo!!!
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { data, refetch } = useQuery(
    "metas",
    () =>
      axios
        .get("http://localhost:8080/metas/todos")
        .then((resp) => resp.data),
    {
      retry: 5,
    }
  );



  // Verifique se data é uma array antes de mapear
  const metasCriadas = Array.isArray(data) ? (
    data.map((meta: any) => {
      if (meta.remetente.nomeusuario === userinfo.nome) {
        return (
          <div className={style.meta} key={meta.nome}>
            <CardMeta
              id={meta.id}
              refetch={refetch}
              data={meta.tempo_para_cabar}
              nome={meta.nomemeta}
              remetente={meta.remetente.nomeusuario}
              urgencia={meta.urgencia}
              descricao={meta.descricao}
              destinatarios={meta.destinatarios}
              config={true}
            />
          </div>
        );
      }
      return null;
    })
  ) : null;

  const metasParaFazer = Array.isArray(data) ? (
    data.map((meta: any) => {
      if ((meta.remetente.nomeusuario !== userinfo.nome || (meta.remetente.nomeusuario === userinfo.nome && meta.destinatarios[0].nomeusuario === userinfo.nome))) {
        console.log(meta)
        return (
          <div className={style.meta} key={meta.nome}>
            <CardMeta
              id={meta.id}
              refetch={refetch}
              data={meta.tempo_para_cabar}
              nome={meta.nomemeta}
              remetente={meta.remetente.nomeusuario}
              urgencia={meta.urgencia}
              descricao={meta.descricao}
              destinatarios={meta.destinatarios}
              config={false}
            />
          </div>
        );
      }
      return null;
    })
  ) : null;

  return (
    <div className={style.page}>
      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Metas Criadas</h1>
        <div className={style.metas}>{metasCriadas}</div>
      </div>

      <div className={style.metascriadas}>
        <h1 className={style.titulo}>Metas Para Fazer</h1>
        <div className={style.metas}>{metasParaFazer}</div>
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
          <Formulario refetch={refetch} />
        </Popover>
      </div>
    </div>
  );
}
