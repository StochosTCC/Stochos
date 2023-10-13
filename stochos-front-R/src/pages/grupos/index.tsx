import CardGrupo from "../../components/Card/CardGrupo";
import grupoData from "./grupos.json";
import userInfo from "../usuario/userinfo.json";
import style from "./Grupos.module.scss";

export default function Grupos() {
  return (
    <div>
      <div className={style.meusgrupos}>
        <h1>Grupos Criados</h1>
        <div className={style.grupos}>
          {grupoData.map((grupo) => (
            <div>
              {grupo.criador === userInfo[0].nome && (
                <CardGrupo
                  nomegrupo={grupo.nome}
                  funcionariosgrupo={grupo.funcionarios}
                  config={true}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1>Seus Grupos</h1>
        <div className={style.grupos}>
          {grupoData.map((grupo) => (
            <div>
              {grupo.criador !== userInfo[0].nome && (
                <CardGrupo
                  nomegrupo={grupo.nome}
                  funcionariosgrupo={grupo.funcionarios}
                  config={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
