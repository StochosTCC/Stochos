import { Button } from "@mui/material";
import style from "./Login.module.scss";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={`${style.subcontainer}`}>
        <div>
          <h1>STOCHOS</h1>
        </div>
        <div>
          <p>Uma nova forma de organização</p>
        </div>
        <div>
          <Button>botao</Button>
        </div>
      </div>

      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <div>
            <form action="">
              <label>Email</label>
              <input type="text" />
              <label>Senha</label>
              <input type="text" />
            </form>
          </div>
          <div>
            <p>esqueceu a senha?</p>
          </div>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
