import setores from "../../../../Usuario/setor.json";
import cargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';
import { useState } from 'react';

interface Props{
  username?: string,
  email?: string,
  password?: string,
  setor?: {
    nomesetor: string,
    id: number
  },
  cargos?: []
}


export default function PopupCriarUsuario({...props}:Props) {


  const [dados, setDados] = useState({
    username: "",
    email: "",
    password: "",
    setor: {},
    cargos: [] as number[],
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: name === "urgency" ? parseInt(value, 10) : value,
    });
  };

  const handleCargoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => Number(option.value)
    ) as number[];
    setDados({
      ...dados,
      cargos: selectedOptions,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataJSON = JSON.stringify(dados);
    console.log(formDataJSON);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.divinput}>
        <label htmlFor="username">Nome de Usuário</label>
        <input onChange={handleInputChange} type="text" name="username" id="username" defaultValue={props.username ? props.username : "nao foi"} required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="email">Email</label>
        <input onChange={handleInputChange} type="email" name="email" id="email" defaultValue={props.email ? props.email : ""} required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="password">Senha</label>
        <input onChange={handleInputChange} type="password" name="password" id="password" defaultValue={props.password ? props.password : ""} required />
      </div>
      <div className={style.divinput}>
        <label htmlFor="setor">Setor</label>
        <select onChange={handleInputChange} className={style.selectcargo} name="setor" id="setor" required>
        <option value="" selected disabled hidden>Selecione aqui</option>
          {setores.map( (setor) =>{
            if( setor.id === props.setor?.id){
              return <option value={setor.id} selected>{setor.nomesetor}</option>
            }
            return <option value={setor.id}>{setor.nomesetor}</option>
          })}
        </select>
      </div>
      <div className={style.divinput}>
        <label htmlFor="cargos">Cargo</label>
        <select onChange={handleCargoChange} name="cargos" id="cargos"  multiple required>
          {cargos.map( (cargo) =>{
            return <option value={cargo.id}>{cargo.nomecargo}</option>
          })}
        </select>
      </div>
      <Button className={style.botao} size="large" variant="contained" type="submit">Criar Usuario</Button>
    </form>
  );
}
