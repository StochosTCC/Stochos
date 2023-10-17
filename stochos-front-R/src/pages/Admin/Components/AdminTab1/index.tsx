import style from "./AdminTab1.module.scss";
import AdminDados from "./AdminTab1.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Popover } from "@mui/material";
import { useState } from "react";
import PopupCriarUsuario from "./Popup";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "nomeusuario", headerName: "Usuário", width: 240 },
  { field: "email", headerName: "email", width: 300 },
  { field: "phone", headerName: "Telefone", width: 170 },
  {
    field: "actions",
    headerName: "Actions",
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
  const id = open ? "simple-popover" : undefined;

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
        <div>Salvar Alterações</div>
      </Popover>
      <Button variant="contained" color="secondary" onClick={deletarUser}>
        EXCLUIR
      </Button>
    </div>
  );
}

const rows = AdminDados;

export default function AdminTab1() {
  return (
    <div>
      <div style={{ height: 600, width: "70%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <Button size="large">Criar Usuario</Button>
    </div>
  );
}
