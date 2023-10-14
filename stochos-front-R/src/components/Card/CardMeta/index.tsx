import { Avatar, Popover } from "@mui/material";
import style from "./CardMeta.module.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { deepOrange, deepPurple, pink, red, teal } from "@mui/material/colors";
import { useState } from "react";
import CardPopup from "../../CardPopup";

interface Props {
  nome: string;
  remetente: string;
  urgencia: number;
  data: string;
  descricao: string;
  destinatarios: string[];
  config: boolean;
}

export default function CardMeta({
  nome,
  remetente,
  data,
  urgencia,
  config,
  descricao,
  destinatarios,
}: Props) {
  
  let color = "";
  
    if (urgencia === 1) {
      color = style.urgencia1;
    } else if (urgencia === 2) {
      color = style.urgencia2;
    } else if (urgencia === 3) {
      color = style.urgencia3;
    }
  

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className={style.card} aria-describedby={id} onClick={handleClick}>
        <div className={style.cardcima}>
          <div>
            <p className={`${style.nomemeta} ${style.textolimitado}`}>{nome}</p>
            <p className={style.nomeremetente}>{remetente}</p>
          </div>
          <div>{randomColor(remetente)}</div>
        </div>

        <div className={`${config ? style.cardbaixoconfig : style.cardbaixo}`}>
          {config && (
            <SettingsOutlinedIcon
              className={style.icon}
              sx={{ fontSize: 40 }}
            ></SettingsOutlinedIcon>
          )}
          <div className={style.urg_e_data}>
            <div className={color}></div>
            <p>{data}</p>
          </div>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <CardPopup
          remetente={remetente}
          nomemeta={nome}
          descricao={descricao}
          destinatarios={destinatarios}
        />
      </Popover>
    </>
  );
}

function randomColor(remetente: string) {
  let size = 46;
  let fontSize = 25;

  return (
    <Avatar
      sx={{ bgcolor: teal[500], width: size, height: size, fontSize: fontSize }}
    >
      {remetente[0]}
    </Avatar>
  );
}
