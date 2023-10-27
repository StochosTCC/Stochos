import DataCargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';
import { useState } from 'react';
import { type } from "os";
import React from 'react';

interface Props{
  nomecargo?: string,
  
}

interface Cargo {
  id: number;
  nomecargo: string;
}

export default function PopupCriarCargo({...props}:Props) {

  const cargos: Cargo[] = DataCargos;

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
    const handleCheckboxChange = (cargoId: number) => {
      if (selectedItems.includes(cargoId)) {
        setSelectedItems(selectedItems.filter(id => id !== cargoId));
      } else {
        setSelectedItems([...selectedItems, cargoId]);
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
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {cargos.map((cargo) => (
            <tr key={cargo.id}>
              <td>{cargo.id}</td>
              <td>{cargo.nomecargo}</td>
              <td>
                <input type="checkbox" 
                checked={selectedItems.includes(cargo.id)}
                onChange ={() => handleCheckboxChange(cargo.id) }
                />
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      <div><h1> Cargos selecionados: {selectedItems.join(',')}</h1></div>
        </div>
        </div>
      
      <Button className={style.botao} size="large" variant="contained" type="submit">{props ? "Editar": "Criar"} Cargo</Button>
    </form>
  );
}

