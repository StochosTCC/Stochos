import style from "./AdminTab1.module.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import PopupCriarUsuario from "./Popup";
import { setPriority } from "os";
import {useQuery} from "react-query";
import axios from "axios";

const largura = window.innerWidth;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nomeusuario",
    headerName: "Usuário",
    width: 200
  },
  { field: "email", headerName: "email", width: (largura * 90) / 100 / 4 },
  { field: "phone", headerName: "Telefone", width: 150 },
  { field: "password", headerName: "Senha", width: 200 },
  {
    field: "nomesetor",
    headerName: "Setor",
    width: 150,
    renderCell: (params) => (
        <div>{params.row.setor.nomesetor}</div>
        ),
  },
  {
    field: "nomecargo",
    headerName: "Cargo",
    width: 200,
    renderCell: (params) => {
      if(params.row.cargo){
        params.row.cargo.map((element: any) => console.log(element.nomecargo))
        return (
          <div className={style.cargos}>
          {params.row.cargo.map( (element: any) =>
          <p>{element.nomecargo}</p>
        )}
        </div>
        )
      }
      return ( <div className={style.cargos}>
        <p>Não Tem Cargo</p>
      </div>)

    }
      // <div className={style.cargos}>
        //{/* {params.row.cargo ? params.row.cargo.map( (element: any) => { */}
          // <p>{element["nomecargo"]}</p>
        // }) : <p>não possui cargo</p> }
     // {/* </div> */}
      // ),
  },

  {
    field: "actions",
    headerName: "Ações",
    width: 220,
    renderCell: (params) => (
      <div className={style.botoes}>
        <Botaos user={params.row} />
      </div>
    ),
  },
];

function Botaos({ user }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const deletarUser = () => {
    console.log(user.id);
  };

  return (
    <div>
      <Button
        aria-describedby="user-actions-popover"
        onClick={handleClick}
        variant="contained"
      >
        EDITAR
      </Button>
      <Popover
        id="user-actions-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PopupCriarUsuario username={user.nomeusuario} email={user.email} password={user.password} setor={user.setor} />
      </Popover>
      <Button
        className={style.botaoexcluir}
        variant="contained"
        color="error"
        onClick={deletarUser}
      >
        EXCLUIR
      </Button>
    </div>
  );
}

export default function AdminTab1() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const {data, isLoading} = useQuery("usuarios", () =>
    axios.get("http://localhost:8080/usuarios/todos").then((resp) => resp.data),
    {
      retry: 5
    }
  )

  if(isLoading){
    return <div>carregando</div>
  }

  return (
    <div className={style.container}>
      <div className={style.datagrid} style={{ height: 600, width: "90%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          className={style.table}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <Button
        aria-describedby="criar-user"
        className={style.botaocriausuario}
        variant="contained"
        size="large"
        onClick={handleClick}
        sx={{
          p: 3
        }}
      >
        Criar Usuario
      </Button>
      <Popover
        id="criar-user"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PopupCriarUsuario />
      </Popover>
    </div>
  );
}
