import style from "./Header.module.scss";
import logo from "../../assets/longlogo.png";
import Popup from "./Popup";


export default function Header(){


    return <>
      <header className={style.header}>
        <div className={style.nav}>
          <div className={style.logo}>
          <img  className={style.logofoto} src={logo} alt="Logo"/>
          </div>

          <div >
            <Popup type="grupo"/>
          </div>

          <div className={style.usuarioinfo}>
            <span className={style.nomedeusuario}>Nome de usuario</span>
            <img className={style.fotodeperfil} src="" alt="Foto de Perfil" />
          </div>
        </div>
      </header>
    </>
}
