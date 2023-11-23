import { useState } from "react";
import userData from "../../Usuario/userinfo.json";
import style from "./Formulario.module.scss";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import axios from 'axios';
import { useQuery } from 'react-query';



export default function Formulario({refetch}: any) {
  const [dados, setDados] = useState({
    nomegrupo: "",
    descricao: "",
    criador: {id: 1},
    usuarios: [{id: 0}],
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
    let funcionariosId: {id: number}[] = []
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => funcionariosId.push({id: Number(option.value)})
    );
    setDados({
      ...dados,
      usuarios: funcionariosId,
    });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post("http://localhost:8080/grupos/criar-grupo", dados).then( () => refetch())

    // Aqui você pode fazer o que quiser com o JSON, como enviar para um servidor, exibir na página, etc.
  };

  const {data, isLoading} = useQuery(
    "usuarios",
    () => axios.get("http://localhost:8080/usuarios/todos").then( (res) => res.data),
    {
      retry: 5
    }
  )

  if(isLoading){
    return <p>carregando...</p>
  }

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
            multiple
            onChange={handleEmployeesChange}
            required
            className={style.select}
          >
            {data.map( (usuario: any) => {
              return <option value={usuario.id}> {usuario.nomeusuario} </option>
            })}
          </select>
        </div>
      </div>

      <button className={style.botao} type="submit">Criar Grupo</button>
    </form>
  );
}
