import { Avatar } from "@mui/material";
import dataUser from "./userinfo.json";

export default function Usuario() {
  return (
    <>
    <div>
      <Avatar>{dataUser[0].nome[0]}</Avatar>

      <p>{dataUser[0].nome}</p>

      <p>{dataUser[0].email}</p>

      <p>{dataUser[0].telefone}</p>

      <p>{dataUser[0].cargo}</p>

      <p>{dataUser[0].setor}</p>
      </div>
    </>
  );
}
