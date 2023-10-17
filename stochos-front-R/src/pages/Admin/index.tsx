import { Tab } from "@headlessui/react";
import AdminTab1 from "./Components/AdminTab1";
import style from "./Admin.module.scss";
import AdminTab2 from './Components/AdminTab2/index';
import AdminTab3 from "./Components/AdminTab3";

export default function Admin() {
  return (
    <Tab.Group>
      <Tab.List>
        <div className={style.tabs}>
          <Tab className={style.tabsbutton}>Usuários</Tab>
          <Tab className={style.tabsbutton}>Cargos</Tab>
          <Tab className={style.tabsbutton}>Setor</Tab>
          <Tab className={style.tabsbutton}>Criar Meta</Tab>
          <Tab className={style.tabsbutton}>Criar Grupo</Tab>
        </div>
      </Tab.List>

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
