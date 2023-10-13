import { Avatar } from "@mui/material";
import style from "./CardGrupo.module.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface Props {
  nomegrupo: string;
  funcionariosgrupo: string[];
  config: boolean;
}

export default function CardGrupo({
  nomegrupo,
  funcionariosgrupo,
  config,
}: Props) {
  return (
    <div className={style.card}>
      <div className={style.cardcima}>
        <div className={`${style.nomegrupo_funcionarios} `}>
          <h1 className={style.titulo}>{nomegrupo}</h1>
          <div className={`${config ? style.funclimitado : ""}`}>
            {funcionariosgrupo.map((func) => {
              return <p className={style.func}>{func}</p>;
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
  );
}
