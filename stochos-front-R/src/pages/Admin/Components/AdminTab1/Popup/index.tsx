import setores from "../../../../Usuario/setor.json";
import cargos from "../../../../Usuario/cargos.json";
import style from "./Popup.module.scss";
import { Button } from '@mui/material';


export default function PopupCriarUsuario() {

  return (
    <form className={style.form}>
      <div className={style.divinput}>
        <label htmlFor="nomeusuario">Nome de Usuário</label>
        <input type="text" name="nomeusuario" id="nomeusuario" required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div className={style.divinput}>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" required />
      </div>
      <div className={style.divinput}>
        <label htmlFor="setor">Setor</label>
        <select className={style.selectcargo} name="setor" id="setor" required>
          {setores.map( (setor) =>{
            return <option value={setor.nomesetor}>{setor.nomesetor}</option>
          })}
        </select>
      </div>
      <div className={style.divinput}>
        <label htmlFor="cargo">Cargo</label>
        <select name="cargo" id="cargo" multiple required>
          {cargos.map( (cargo) =>{
            return <option value={cargo.nomecargo}>{cargo.nomecargo}</option>
          })}
        </select>
      </div>
      <Button className={style.botao} size="large" variant="contained">Criar Usuario</Button>
    </form>
  );
}
