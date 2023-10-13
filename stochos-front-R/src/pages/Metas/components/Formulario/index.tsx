import { ChangeEvent, useState } from "react";
import style from "./Formulario.module.scss";

export default function Formulario() {
  const [dados, setDados] = useState({
    nome: "",
    descricao: "",
    prazo: "",
    funcionarios: [],
    urgencia: 1,
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    // Verifica se o campo é 'funcionarios' e trata os valores como um array
    const novoValor =
      name === "funcionarios"
        ? value.split(",")
        : type === "number"
        ? parseInt(value, 10)
        : value;

    setDados({
      ...dados,
      [name]: novoValor,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dados);
  };

  const [value, setValue] = useState(1);

  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
    console.log(getBackgroundColor())
  };
  const getBackgroundColor = () => {
    if (value === 1) {
      return `#4CD60F`;
    } else if (value === 2) {
      return `#FDF427`;
    } else if (value === 3) {
      return `#F92E2E`;
    }
  };

  return (
    <div>
      <form className={style.form}>
        <div className={style.formcima}>
          <label className={style.label}>Nome da Meta</label>
          <input
            className={style.input}
            type="text"
            name="Desenvolva a landpage"
            id="nomemeta"
          />
          <label className={style.label}>Descricao</label>
          <textarea className={style.textarea} rows={4} cols={50}></textarea>
          <label className={style.label}>Prazo</label>
          <input className={style.input} type="datetime-local" name="" id="" />
          <label className={style.label}>
            Funcionários (separar por virgula)
          </label>
          <input className={style.input} type="text" />
        </div>
        <div className={style.urgenciadiv}>
          <label htmlFor="urg" className={style.urgenciatext}>
            Urgência
          </label>
          <input
            type="range"
            min="1"
            max="3"
            value={value}
            onChange={handleChangeRange}
            style={{ accentColor: getBackgroundColor(), width: "80%" }}
          />
        </div>
        <button className={style.botao} type="submit">
          Criar Meta
        </button>
      </form>
    </div>
  );
}
