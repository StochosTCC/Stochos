import cargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';
import { useState } from 'react';

interface Props{
  nomecargo?: string
  
}


export default function PopupCriarCargo({...props}:Props) {


  const [dados, setDados] = useState({
    nomecargo: "",
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

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div >
      <div className={style.divinput}>
        <label htmlFor="nomecargo">Nome do Cargo</label>
        <input onChange={handleInputChange} type="text" name="nomecargo" id="nomecargo" defaultValue={props.nomecargo ? props.nomecargo : ""} required/>
        </div>

        <h1> Esse cargo terá permissão sobre:</h1>
        <table className={style.tabela} >
          
            <tr>
        <input type="checkbox" id="permissoes" name="caixadeselecao" value="opcao1"/>
        <td><label htmlFor="permissoes"> permissão 1</label></td>
        </tr>
        </table>
        </div>
      
      <Button className={style.botao} size="large" variant="contained" type="submit">{props ? "Editar": "Criar"} Cargo</Button>
    </form>
  );
}
