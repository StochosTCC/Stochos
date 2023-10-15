import { Button, Popover } from "@mui/material";
import style from "./CardGrupoPopup.module.scss";
import CardMeta from "../../Card/CardMeta";
import { useState } from "react";
import Formulario from "./Formulario";
import { GrupoMeta } from "../../../enums/GrupoMeta/GrupoMeta";

interface Props {
  nome: string;
  descricao: string;
  funcionarios: string[];
  disable: boolean
}

export default function CardGrupoPopup({
  nome,
  descricao,
  funcionarios,
  disable
}: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={style.cardpopup}>
      <div className={style.divinput}>
        <label className={style.label} htmlFor="nomegrupo">
          Nome do Grupo
        </label>
        <input
          className={style.input}
          type="text"
          name="nomegrupo"
          id="nomegrupo"
          value={nome}
          readOnly
        />
      </div>
      <div className={style.divinput}>
        <label className={style.label} htmlFor="descricao">
          Descrição
        </label>
        <textarea
          className={style.desc}
          name="descricao"
          id="descricao"
          cols={30}
          rows={10}
          value={descricao}
          readOnly
        ></textarea>
      </div>
      <div className={style.divinput}>
        <label className={style.label} htmlFor="funcionarios">
          Destinatario
        </label>
        <select
          className={style.select}
          multiple
          name="funcionarios"
          id="funcionarios"
        >
          {funcionarios.map((dest) => {
            return <option value={dest}>{dest}</option>;
          })}
        </select>
      </div>
      <div className={style.botao}>
        {disable && <Button aria-describedby={id} variant="contained" size="large" onClick={handleClick}>Enviar Meta</Button>}
        {!disable && <Button variant="contained" size="large" disabled>Enviar Meta</Button>}
        <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
         <Formulario funcionarios={funcionarios} />
        </Popover>
      </div>
    </div>
  );
}
