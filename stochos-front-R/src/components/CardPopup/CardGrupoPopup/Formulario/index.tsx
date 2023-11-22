import { useState } from "react";
import style from "./Formulario.module.scss";

interface Props{
    funcionarios: any[]
}

export default function Formulario({funcionarios}: Props){

  const [dados, setDados] = useState({
    nomemeta: "",
    descricao: "",
    prazo: "",
    funcionarios: funcionarios,
    urgencia: 1,
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: name === "urgency" ? parseInt(value, 10) : value,
    });
    getBackgroundColor(dados.urgencia)
  };

  const handleEmployeesChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    ) as string[];
    setDados({
      ...dados,
      funcionarios: selectedOptions,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataJSON = JSON.stringify(dados);
    console.log(formDataJSON);

    // Aqui você pode fazer o que quiser com o JSON, como enviar para um servidor, exibir na página, etc.
  };
  const getBackgroundColor = (value: number) => {
    value = Number(value)
    if (value === 1) {
      return `#4CD60F`;
    } else if (value === 2) {
      return `#FDF427`;
    } else if (value === 3) {
      return `#F92E2E`;
    }
    return '#ffffff'
  };

  return (
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formcima}>
          <label className={style.label}>Nome da Meta</label>
          <input
            className={style.input}
            type="text"
            name="nomemeta"
            id="nomemeta"
            defaultValue={dados.nomemeta}
            onChange={handleInputChange}
            required
          />
          <label className={style.label}>Descricao</label>
          <textarea
            onChange={handleInputChange}
            className={style.textarea}
            rows={4}
            cols={50}
            name="descricao"
            id="descricao"
            value={dados.descricao}
            required
          ></textarea>
          <label className={style.label}>Prazo</label>
          <input
            className={style.input}
            onChange={handleInputChange}
            type="datetime-local"
            name="prazo"
            id="prazo"
            value={dados.prazo}
            required
          />
          <label className={style.label}>
            Funcionários
          </label>
          <select
            id="funcionarios"
            name="funcionarios"
            value={dados.funcionarios}
            multiple
            onChange={handleEmployeesChange}
            className={style.funcionarios}
            required
          >
            {funcionarios.map((func) => {
                return <option value={func.id} selected>{func.nomeusuario}</option>
            })}
          </select>
        </div>
        <div className={style.urgenciadiv}>
          <label htmlFor="urgencia" className={style.urgenciatext}>
            Urgência
          </label>
          <input
            type="range"
            min="1"
            max="3"
            id="urgencia"
            name="urgencia"
            value={dados.urgencia}
            onChange={handleInputChange}
            style={{
              accentColor: getBackgroundColor(dados.urgencia),
              width: "80%",
              marginBottom: "1rem",
            }}
          />
        </div>
        <button className={style.botao} type="submit">
          Criar Meta
        </button>
      </form>
  );
}
