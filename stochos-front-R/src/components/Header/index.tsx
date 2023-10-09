import style from "./Header.module.scss";
import logo from "../../assets/longlogo.png";
import Popup from "./Popup";
import { GrupoMeta } from '../../enums/GrupoMeta/GrupoMeta';


export default function Header(){


    return <>
      <header className={style.header}>
        <div className={style.nav}>
          <div className={style.logo}>
          <img  className={style.logofoto} src={logo} alt="Logo"/>
          </div>

          <div className={style.grupometa}>
            <Popup type={GrupoMeta.GRUPO}/>
            <Popup type={GrupoMeta.META}/>

          </div>

          <div className={style.usuarioinfo}>
            <span className={style.nomedeusuario}>Nome de usuario</span>
            <img className={style.fotodeperfil} src="" alt="Foto de Perfil" />
          </div>
        </div>
      </header>
    </>
}
