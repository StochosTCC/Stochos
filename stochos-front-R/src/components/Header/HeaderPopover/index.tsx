import { GrupoMeta } from "../../../enums/GrupoMeta/GrupoMeta";
import style from "./HeaderPopover.module.scss";

interface Props {
  type: GrupoMeta;
}

export default function HeaderPopover({ type }: Props) {
  const values = [];

  if (type === GrupoMeta.GRUPO) {
    values.push("Grupos");
    values.push("Criar Grupos");
    values.push("Deletar Grupos");
  } else if (type === GrupoMeta.META) {
    values.push("Metas");
    values.push("Criar Metas");
    values.push("Deletar Metas");
  }

  return (
    <div className={style.card}>
      {values.map((value) => {
        if (value === "Grupos") {
          return (
            <a className={style.card_item} href="/grupos">
              <div className={style.card_item_value}>
                <div className={style.icon}></div>

                <span className={style.font}>{value}</span>
              </div>
            </a>
          );
        } else if (value === "Metas") {
          return (
            <a className={style.card_item} href="/metas">
              <div className={style.card_item_value}>
                <div className={style.icon}></div>

                <span className={style.font}>{value}</span>
              </div>
            </a>
          );
        } else {
          return (
            <div className={style.card_item}>
              <div className={style.card_item_value}>
                <div className={style.icon}></div>

                <span className={style.font}>{value}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
