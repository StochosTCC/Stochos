import { ChangeEvent, useState } from "react";
import style from "./Formulario.module.scss";
import { useQuery } from 'react-query';
import axios from "axios";
import Usuario from '../../../Usuario/index';


interface Usuario{
  id: number
}


export default function Formulario({refetch}: any) {





  const [dados, setDados] = useState({
    nomemeta: "",
    descricao: "",
    prazo: "",
    remetente: {id: 1},
    destinatarios: [{id: 0}],
    urgencia: 1,
  });

  const { data, isLoading } = useQuery(
    "usuarios",
    () =>
      axios
        .get("http://localhost:8080/usuarios/todos")
        .then((resp) => resp.data),
    {
      retry: 5,
    }
  );

  if(isLoading){
    return <p>carregando...</p>
  }

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    if(name === "urgencia"){
      setDados({
        ...dados,
        urgencia: Number(value)
      })
    }
    setDados({
      ...dados,
      [name]: name === "urgencia" ? parseInt(value, 10) : value,
    });
    getBackgroundColor(dados.urgencia)
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
      destinatarios: funcionariosId,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dados)
    axios.post("http://localhost:8080/metas", dados).then( (res) => {
      refetch()
    })
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
            multiple
            onChange={handleEmployeesChange}
            className={style.funcionarios}
            required
          >
            {data && data.map( (usuario: any) => {
              return <option value={usuario.id}>{usuario.nomeusuario} </option>
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
