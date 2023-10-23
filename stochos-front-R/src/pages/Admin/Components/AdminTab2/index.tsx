import style from "./AdminTab2.module.scss";
import DataCargo from "../../../Usuario/cargos.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import { setPriority } from "os";
import PopupCriarCargo from "./Popup";

const largura = window.innerWidth;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nomecargo", headerName: "Cargo", width: (largura * 218) / 100 / 3 },

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

  const deletarCargo = () => {
    console.log(cargo.id);
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
      ></Popover>
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

const rows = DataCargo;

export default function AdminTab2() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
        <PopupCriarCargo />
      </Popover>
    </div>
  );
}
