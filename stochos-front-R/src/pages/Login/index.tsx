import { Button } from "@mui/material";
import style from "./Login.module.scss";

export default function Login() {
  return (
    <div className={`${style.page} `}>
      <div className={style.container}>
        <div className={`${style.subcontainer}`}>
          <div className={style.subcontainerdiv}>
            <h1 className={style.titulo}>STOCHOS</h1>
          </div>
          <div className={style.subcontainerdiv}>
            <p className={style.descricao}>
              Uma nova forma <br /> de organização
            </p>
          </div>
          <div className={style.subcontainerdiv}>
            <button className={style.botao} type="button">
              Saiba mais
            </button>
          </div>
        </div>

        <div className={`${style.subcontainer1} loginpage`}>
          <div className={style.titulodiv}>
            <h1 className={style.titulo}>Login</h1>
          </div>
          <div className={style.login}>
            <div className={style.formulariodiv}>
              <form
                className={style.formulario}
                action="http://localhost:3000/metas"
              >
                <div className={style.miniform}>
                  <label className={style.formulariolabel}>Usuario</label>
                  <input
                    className={style.formularioinput}
                    type="text"
                    required
                  />
                </div>
                <div className={style.miniform}>
                  <label className={style.formulariolabel}> Senha</label>
                  <input
                    className={style.formularioinput}
                    type="password"
                    required
                  />
                </div>
              <div className={style.botaologindiv}>
                <button className={style.botaologin} type="submit">
                  Login
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
