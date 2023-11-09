import style from "./AdminTab3.module.scss";
import DataSetor from "../../../Usuario/setor.json"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import Popupsetor from "./popup";

const largura = window.innerWidth;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nomesetor", headerName: "setor", width: (largura*218/100)/3 },
  
  {
    field: "actions",
    headerName: "Ações",
    width: 220,
    renderCell: (params) => (
      <div className={style.botoes}>
        <Botaos cargo={params.row} />
      </div>
    ),
  },
];

function Botaos({ cargo }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const deletarSetor = () => {
    console.log(cargo.id);
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

const rows = DataSetor;

export default function AdminTab3() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    return(
    <div className={style.container}>
      <div className={style.datagrid} style={{ height: 600, width: "90%" }}>
        <DataGrid
          rows={rows}
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
          p: 3
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
          <Popupsetor id={0}/>
      </Popover>
    </div>
    )
}