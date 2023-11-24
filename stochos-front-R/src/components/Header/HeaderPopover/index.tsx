import { GrupoMeta } from "../../../enums/GrupoMeta/GrupoMeta";
import style from "./HeaderPopover.module.scss";
import { FiTarget } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { Popover } from "@mui/material";

import { useState } from "react";

import React from "react";
import FormularioMeta from "../../CardPopup/CardGrupoPopup/Formulario/index";
import FormularioGrupo from "../../../pages/Grupos/Formulario"

interface Props {
  type: GrupoMeta;
}

export default function HeaderPopover({ type }: Props) {
  const values = [];

  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  if (type === GrupoMeta.GRUPO) {
    values.push("Grupos");
  } else if (type === GrupoMeta.META) {
    values.push("Metas");
  }

  return (
    <div className={style.card}>
      {values.map((value) => {
        if (value === "Grupos") {
          return (
            <>
              <a className={style.card_item} href="/grupos">
                <div className={style.card_item_value}>
                  <div className={style.icon}>
                    {" "}
                    <FiUsers size={50} />{" "}
                  </div>

                  <span className={style.font}>{value} </span>
                </div>
              </a>

              <div className={style.card_item}>
                <div
                  aria-describedby={id}
                  onClick={handleClick}
                  className={style.card_item_value}
                >
                  <div className={style.icon}>
                    {" "}
                    <FiUserPlus size={50} />
                  </div>

                  <span className={style.font}> Criar {value}</span>
                </div>

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <FormularioGrupo/>
                </Popover>
              </div>
            </>
          );
        } else if (value === "Metas") {
          return (
            <>
              <a className={style.card_item} href="/metas">
                <div className={style.card_item_value}>
                  <div className={style.icon}>
                    {" "}
                    <FiTarget size={50} />
                  </div>

                  <span className={style.font}>{value}</span>
                </div>
              </a>
              <div className={style.card_item}>
                <div
                  aria-describedby={id}
                  onClick={handleClick}
                  className={style.card_item_value}
                >
                  <div className={style.icon}>
                    {" "}
                    <FiPlus size={50} />
                  </div>

                  <span className={style.font}> Criar {value}</span>
                </div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <FormularioMeta funcionarios={[]} />
                </Popover>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
