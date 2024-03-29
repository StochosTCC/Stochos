import style from "./AdminTab3.module.scss";
import DataSetor from "../../../Usuario/setor.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import Popupsetor from "./popup";
import { useQuery } from "react-query";
import axios from "axios";

const largura = window.innerWidth;

function Botaos({ setor, refetch }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const deletarSetor = () => {
  console.log(setor.id)
  const status = axios.delete(`http://localhost:8080/setor/${setor.id}`).then(
    (res) => {
      if( res.data === "IM_USED"){
        window.alert("SETOR ESTA SENDO USADO")
      }
      refetch()
  })
  console.log(status)
  };

  return (
    <div>
      <Button
        className={style.botaoexcluir}
        variant="contained"
        color="error"
        onClick={deletarSetor}
      >
        EXCLUIR
      </Button>
    </div>
  );
}

export default function AdminTab3() {


  const { data, isLoading, refetch } = useQuery(
    "setor",
    () =>
    axios.get("http://localhost:8080/setor/todos").then((resp) => resp.data),
    {
      retry: 5,
    }
    );


    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    if (isLoading) {
      return <div>Carregando...</div>;
    }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nomesetor", headerName: "setor", width: (largura * 218) / 100 / 3 },

    {
      field: "actions",
      headerName: "Ações",
      width: 220,
      renderCell: (params) => params.row.id && (
        <div className={style.botoes}>
          <Botaos setor={params.row} refetch={refetch} />
        </div>
      ),
    },
  ];


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
        aria-describedby="criar-setor"
        className={style.botaocriausuario}
        variant="contained"
        size="large"
        onClick={handleClick}
        sx={{
          p: 3,
        }}
      >
        Criar setor
      </Button>
      <Popover
        id="criar-setor"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Popupsetor refetch={refetch}/>
      </Popover>
    </div>
  );
}
