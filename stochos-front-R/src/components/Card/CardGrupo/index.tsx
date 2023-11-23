import { Avatar, Popover } from "@mui/material";
import style from "./CardGrupo.module.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import CardGrupoPopup from "../../CardPopup/CardGrupoPopup";

interface Props {
  nomegrupo: string;
  descricao: string;
  funcionariosgrupo: any[];
  config: boolean;
}

export default function CardGrupo({
  nomegrupo,
  descricao,
  funcionariosgrupo,
  config,
}: Props) {
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
    <div>
      <div className={style.card} onClick={handleClick}>
        <div className={style.cardcima}>
          <div className={`${style.nomegrupo_funcionarios} `}>
            <h1 className={style.titulo}>{nomegrupo}</h1>
            <div className={`${config ? style.funclimitado : ""}`}>
              {funcionariosgrupo.map((func) => {
                return <p className={style.func}>{func.nomeusuario}</p>;
              })}
            </div>
          </div>
          <div className={style.avatar}>
            <Avatar>{nomegrupo[0]}</Avatar>
          </div>
        </div>

        <div>
          {config && (
            <SettingsOutlinedIcon
              className={style.icon}
              sx={{ fontSize: 40 }}
            ></SettingsOutlinedIcon>
          )}
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
        <CardGrupoPopup nome={nomegrupo} descricao={descricao} funcionarios={funcionariosgrupo} disable={config} />
      </Popover>
    </div>
  );
}
