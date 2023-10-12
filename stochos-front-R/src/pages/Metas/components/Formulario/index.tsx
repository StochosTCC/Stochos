import { ChangeEvent, useState } from "react";
import style from "./Formulario.module.scss";
import { RadioGroup } from "@headlessui/react";
import { FormControlLabel, Radio } from "@mui/material";

export default function Formulario() {
  const [dados, setDados] = useState({
    nome: "",
    descricao: "",
    prazo: "",
    funcionarios: [],
    urgencia: 1,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          <label className={style.urgenciatext}>Urgência</label>
          <div className={style.radioGroup}>
            
              <input
                className={`${style.radio1} ${style.radio}`}
                value={1}
                type="radio"
                name="urgencia"
                id="radio1"
              />
         
            <input
              className={`${style.radio2} ${style.radio}`}
              value={2}
              type="radio"
              name="urgencia"
              id="radio2"
            />
            <input
              className={`${style.radio3} ${style.radio}`}
              value={3}
              type="radio"
              name="urgencia"
              id="radio3"
            />
          </div>
        </div>
        <button className={style.botao} type="submit">
          Criar Meta
        </button>
      </form>
    </div>
  );
}
