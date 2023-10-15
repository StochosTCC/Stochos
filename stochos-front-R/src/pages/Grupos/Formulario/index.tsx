import { useState } from "react";
import userData from "../../usuario/userinfo.json";
import style from "./Formulario.module.scss";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";



export default function Formulario() {
  const [dados, setDados] = useState({
    nomegrupo: "",
    descricao: "",
    funcionarios: [] as string[],
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

  const criador = userData[0].nome;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataJSON = JSON.stringify({ dados, criador });
    console.log(formDataJSON);

    // Aqui você pode fazer o que quiser com o JSON, como enviar para um servidor, exibir na página, etc.
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formdiv}>
        <Avatar
          className={style.avatar}
          sx={{
            width: 150,
            height: 150,
            bgcolor: teal[500],
            fontSize: 94,
          }}
        >
          {dados.nomegrupo[0]}
        </Avatar>
        <div className={style.forminputdiv}>
          <label className={style.label}>Nome do Grupo</label>
          <input
            type="text"
            name="nomegrupo"
            id="nomegrupo"
            defaultValue={dados.nomegrupo}
            onChange={handleInputChange}
            required
            className={style.input}
          />
        </div>
        <div className={style.forminputdiv}>
          <label className={style.label}>Descricao</label>
          <textarea
            onChange={handleInputChange}
            rows={4}
            cols={50}
            name="descricao"
            id="descricao"
            value={dados.descricao}
            required
            className={style.textarea}
          ></textarea>
        </div>
        <div className={style.forminputdiv}>
          <label className={style.label}>Funcionários (separar por virgula)</label>
          <select
            id="funcionarios"
            name="funcionarios"
            value={dados.funcionarios}
            multiple
            onChange={handleEmployeesChange}
            required
            className={style.select}
          >
            <option value="Funcionário 1">Funcionário 1</option>
            <option value="Funcionário 2">Funcionário 2</option>
            <option value="Funcionário 3">Funcionário 3</option>
          </select>
        </div>
      </div>

      <button className={style.botao} type="submit">Criar Grupo</button>
    </form>
  );
}
