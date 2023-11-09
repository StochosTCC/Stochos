import { Button } from '@mui/material';
import { useState } from 'react';
import style from "./Popup.module.scss"
import DataSetor from "../../../../Usuario/setor.json" 
import { useProps } from '@mui/x-data-grid/internals';

interface Props{
  nomesetor?: string,
  id:number
}

export default function Popupsetor({...props}:Props){

  const [dados, setDados] = useState({
    nomesetor : props.nomesetor || ""
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


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataJSON = JSON.stringify(dados);
    console.log(formDataJSON);
  };
    return(
        <form className={style.form}>
        <div className={style.divinput}>
          <label htmlFor="nomesetor">Nome do Setor</label>
          <input  type="text" name="nomesetor" id="nomesetor" defaultValue="setor"/>
          </div>
        
        <Button className={style.botao} size="large" variant="contained" type="submit"> Criar Cargo</Button>
      </form>
    )
}