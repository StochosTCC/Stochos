import DataCargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';
import { useState } from 'react';
import { type } from "os";

interface Props{
  nomecargo?: string
  
}
type Cargos = typeof DataCargos[0];


export default function PopupCriarCargo({...props}:Props, cargo:Cargos ) {

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedItems([...selectedItems, checkboxId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== checkboxId));
    }
  };



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
        <input onChange={handleInputChange} type="text" name="nomecargo" id="nomecargo" defaultValue={props.nomecargo ?? ""} required/>
        </div>

        <h1> Esse cargo terá permissão sobre:</h1>
        <div className={style.tabela}>
        <table  >
          
            <tr key={cargo.id}>
        <input type="checkbox" value={cargo.id}  checked={selectedItems.includes(cargo.id)}
                  onChange={handleCheckboxChange}/>
        <td>
          {cargo.nomecargo}
        </td>
        </tr>
        </table>
        </div>
        </div>
      
      <Button className={style.botao} size="large" variant="contained" type="submit">{props ? "Editar": "Criar"} Cargo</Button>
    </form>
  );
}
