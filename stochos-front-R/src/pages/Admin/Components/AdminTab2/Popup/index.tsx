import DataCargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { type } from "os";
import React from "react";
import axios from "axios";

interface Props {
  refetch: any,
  id?: number
  nomecargo?: string;
}

interface Cargo {
  id: number;
  nomecargo: string;
}

export default function PopupCriarCargo({refetch, ...props }: Props) {
  const cargos: Cargo[] = DataCargos;

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (cargoId: number) => {
    if (selectedItems.includes(cargoId)) {
      setSelectedItems(selectedItems.filter((id) => id !== cargoId));
    } else {
      setSelectedItems([...selectedItems, cargoId]);
    }
  };

  const [dados, setDados] = useState({
    nomecargo: "",
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
    axios.post("http://localhost:8080/cargos/criar-cargo", dados).then( () => refetch())
  };

  const handleSubmitPut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dados)
    axios.put(`http://localhost:8080/cargos/${props.id}`, dados).then( () => refetch())
  };

  return (
    <form onSubmit={props.nomecargo ? handleSubmitPut : handleSubmit} className={style.form}>
      <div>
        <div className={style.divinput}>
          <label htmlFor="nomecargo">Nome do Cargo</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="nomecargo"
            id="nomecargo"
            defaultValue={props.nomecargo ?? ""}
            required
          />
        </div>

        <h1> Esse cargo terá permissão sobre:</h1>
        <div className={style.tabelaC}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Cargo</td>
              <td>selecionar</td>
            </tr>
          </thead>
        </div>
        <div className={style.tabelaA}>
          <table>
            <div className={style.tabelaB}>
              <tbody>
                {cargos.map((cargo) => (
                  <tr key={cargo.id}>
                    <td>{cargo.id}</td>
                    <td>{cargo.nomecargo}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(cargo.id)}
                        onChange={() => handleCheckboxChange(cargo.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </table>
        </div>
      </div>

      <div className={style.selecao}>
        <h1></h1>
      <p> Cargos selecionados: {selectedItems.join(",")}</p>
      <h1></h1>
      </div>


      <Button
        className={style.botao}
        size="large"
        variant="contained"
        type="submit"
      >
        {props ? "Editar" : "Criar"} Cargo
      </Button>
    </form>
  );
}
