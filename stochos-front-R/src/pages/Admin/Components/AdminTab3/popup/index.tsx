import { Button } from '@mui/material';
import { useState } from 'react';
import style from "./Popup.module.scss"
import axios from 'axios';

export default function Popupsetor({refetch}: any){

  const [dados, setDados] = useState({
    nomesetor: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: name === "urgency" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dados)
    axios.post("http://localhost:8080/setor/criar-setor", dados).then( () => refetch())
  };

    return(
        <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.divinput}>
          <label htmlFor="nomesetor">Nome do Setor</label>
          <input onChange={handleInputChange} type="text" name="nomesetor" id="nomesetor"/>
          </div>

        <Button className={style.botao} size="large" variant="contained" type="submit"> Criar Cargo</Button>
      </form>
    )
}
