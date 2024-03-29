// import setores from "../../../../Usuario/setor.json";
// import cargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from "axios";
import { useQuery } from "react-query";

interface Props{
  refetch?: any,
  id?: number,
  nomeusuario?: string,
  email?: string,
  phone?: string,
  password?: string,
  setor?: {
    nomesetor: string,
    id: number
  }
  cargos?: Array<Cargo>
}
interface Cargo{
  id: number
}

export default function PopupCriarUsuario({refetch, ...props}:Props) {


    const [dados, setDados] = useState({
    id: props.id || 0,
    nomeusuario: props.nomeusuario || "",
    email: props.email || "",
    phone: props.phone || "",
    password: props.password || "",
    setor: props.setor || {id: 0},
    cargos: props.cargos || {id: 0},
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: name === "setor" ? {id: value} : value,

    });
  };

  const handleCargoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let cargoSelect: { id: number; }[] = []
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => cargoSelect.push({id: Number(option.value)})
    )
    console.log(cargoSelect)
    setDados({
      ...dados,
      cargos: cargoSelect,
    });
  };

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post("http://localhost:8080/usuarios/criar-usuario/", dados)
    .then((res) => {
      refetch()
    })
  };

  const handleSubmitPut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dados)
    axios.put(`http://localhost:8080/usuarios/${dados.id}`, dados)
    .then((res) => {
      refetch()
    })
  };

  const getSetores = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, isLoading} = useQuery(
      "setores",

      () => axios
        .get("http://localhost:8080/setor/todos")
        .then((res) => res.data)
    )
    console.log(data)
    return data
  }

  const getCargos = (): any => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data} = useQuery(
      "cargos",

     () => axios
        .get("http://localhost:8080/cargos/todos")
        .then((res) => res.data)
    )

    return data
  }

  const setores = getSetores()
  const cargos = getCargos()

  return (
    <form onSubmit={props.email ? handleSubmitPut : handleSubmitPost} className={style.form}>
      <div className={style.divinput}>
        <label htmlFor="nomeusuario">Nome de Usuário</label>
        <input onChange={handleInputChange} type="text" name="nomeusuario" id="nomeusuario" defaultValue={props.nomeusuario ?? ""} required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="email">Email</label>
        <input onChange={handleInputChange} type="email" name="email" id="email" defaultValue={props.email ?? ""} required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="email">Telefone</label>
        <input onChange={handleInputChange} type="tel" name="phone" id="phone" defaultValue={props.phone ?? ""} required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="password">password</label>
        <input onChange={handleInputChange} type="password" name="password" id="password" defaultValue={props.password ?? ""} required />
      </div>
      <div className={style.divinput}>
        <label htmlFor="setor">Setor</label>
        <select onChange={handleInputChange} className={style.selectcargo} name="setor" id="setor" required>
        {props.setor === undefined && <option value="" selected disabled hidden>Selecione aqui</option>}
          {setores && setores.map( (setor: any) =>{
            if( setor.id === Number(props.setor?.id)){
              return <option value={setor.id} selected>{setor.nomesetor}</option>
            }
            return <option value={setor.id}>{setor.nomesetor}</option>
          })}
        </select>
      </div>
      <div className={style.divinput}>
        <label htmlFor="cargos">Cargo</label>
        <select onChange={handleCargoChange} name="cargos" id="cargos"  multiple required>
          {cargos && cargos.map( (cargo: any) =>{
            return <option value={cargo.id}>{cargo.nomecargo}</option>
          })}
        </select>
      </div>
      <Button   className={style.botao} size="large" variant="contained" type="submit">{props.email ? "Editar": "Criar"} Usuario</Button>
    </form>
  );
}
