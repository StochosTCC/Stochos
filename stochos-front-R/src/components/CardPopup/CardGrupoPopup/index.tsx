import style from "./CardGrupoPopup.module.scss";

interface Props {
  nome: string;
  descricao: string;
  funcionarios: string[];
}

export default function CardGrupoPopup({
  nome,
  descricao,
  funcionarios,
}: Props) {
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
    </div>
  );
}
