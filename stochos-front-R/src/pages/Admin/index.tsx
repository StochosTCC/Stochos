import { Tab } from "@headlessui/react";
import AdminTab1 from "./Components/AdminTab1";
import style from "./Admin.module.scss";
import AdminTab2 from './Components/AdminTab2/index';
import AdminTab3 from "./Components/AdminTab3";
import { Button, Popover } from '@mui/material';
import FormularioM from "../Metas/components/Formulario";
import { useState } from "react";

import dataMeta from "../Metas/meta.json"
import FormularioG from "../../components/CardPopup/CardGrupoPopup/Formulario";

export default function Admin() {

  let userinfo = dataMeta[0];


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Tab.Group>
      <div className={style.tabs}>
      <Tab.List>
        
          <Tab className={style.tabsbutton}>Usuários</Tab>
          <Tab className={style.tabsbutton}>Cargos</Tab>
          <Tab className={style.tabsbutton}>Setor</Tab>
      
      </Tab.List>
      <div className={style.buttons}>
      <button
          aria-describedby={id}
          onClick={handleClick}
        >
         <h1 className={style.lb}> Criar Meta </h1>
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <FormularioM />
        </Popover>
        </div>

        <div className={style.buttons}>
      <button
          aria-describedby={id}
          onClick={handleClick}
        >
         <h1 className={style.lb}> Criar Grupo </h1>
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <FormularioG funcionarios={[]} />
        </Popover>
        </div>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <AdminTab1 />
        </Tab.Panel>

        <Tab.Panel><AdminTab2/></Tab.Panel>
        <Tab.Panel><AdminTab3/></Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
        <Tab.Panel>Content 5</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
