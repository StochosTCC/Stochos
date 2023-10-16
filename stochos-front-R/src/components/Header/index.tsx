import style from "./Header.module.scss";
import logo from "../../assets/longlogo.png";
import Popup from "./Popup";
import { GrupoMeta } from "../../enums/GrupoMeta/GrupoMeta";
import { Avatar } from "@mui/material";
import dataUser from "../../pages/Usuario/userinfo.json"
import React from "react";
import Popover from '@mui/material/Popover';
import PopoverUser from "./PopupUser";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <header className={style.header}>
        <div className={style.nav}>
          <div className={style.logo}>
            <img className={style.logofoto} src={logo} alt="Logo" />
          </div>

          <div className={style.grupometa}>
            <Popup type={GrupoMeta.GRUPO} />
            <Popup type={GrupoMeta.META} />
          </div>

          <div className={style.usuarioinfo}>
            <span className={style.nomedeusuario}>{dataUser[0].nome}</span>
            
            <div><Avatar aria-describedby={id} onClick={handleClick}>{dataUser[0].nome[0]}</Avatar></div>
            <Popover 
               id={id}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'right',
               }}>
                 <PopoverUser/>
        </Popover>
          </div>
        </div>
      </header>
    </>
  );
}
