import style from "./AdminTab2.module.scss";
import DataCargo from "../../../Usuario/cargos.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import { setPriority } from "os";
import PopupCriarCargo from "./Popup";
import { useQuery } from "react-query";
import axios from "axios";

const largura = window.innerWidth;

function Botaos({ cargo, refetch }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const deletarCargo = () => {
    axios.delete(`http://localhost:8080/cargos/${cargo.id}`).then( () => refetch())

  };

  return (
    <div>
      <Button
        aria-describedby="cargo-actions-popover"
        onClick={handleClick}
        variant="contained"
      >
        EDITAR
      </Button>
      <Popover
        id="cargo-actions-popover"
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
        <PopupCriarCargo refetch={refetch} nomecargo={cargo.nomecargo} id={cargo.id}/>
      </Popover>



      <Button
        className={style.botaoexcluir}
        variant="contained"
        color="error"
        onClick={deletarCargo}
      >
        EXCLUIR
      </Button>
    </div>
  );
}



export default function AdminTab2() {

  const { data, isLoading, refetch } = useQuery(
    "usuarios",
    () =>
      axios
        .get("http://localhost:8080/cargos/todos")
        .then((resp) => resp.data),
    {
      retry: 5,
    }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nomecargo", headerName: "Cargo", width: (largura * 218) / 100 / 3 },

    {
      field: "actions",
      headerName: "Ações",
      width: 220,
      renderCell: (params) => (
        <div className={style.botoes}>
          <Botaos cargo={params.row} refetch={refetch} />
        </div>
      ),
    },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

if(isLoading){
  return <div>Carregando...</div>
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
        aria-describedby="criar-cargo"
        className={style.botaocriausuario}
        variant="contained"
        size="large"
        onClick={handleClick}
        sx={{
          p: 3,
        }}
      >
        Criar cargo
      </Button>
      <Popover
        id="criar-cargo"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >



        <PopupCriarCargo refetch={refetch}/>

      </Popover>
    </div>
  );
}
