import setores from "../../../../usuario/setor.json";
import cargos from "../../../../usuario/cargos.json";


export default function PopupCriarUsuario() {
  return (
    <div>
      <div>
        <label htmlFor="nomeusuario">Nome de Usuário</label>
        <input type="text" name="nomeusuario" id="nomeusuario" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="setor">Setor</label>
        <select name="setor" id="setor">
          {setores.map( (setor) =>{
            return <option value={setor.nomesetor}>{setor.nomesetor}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="cargo">Cargo</label>
        <select name="cargo" id="cargo">
          {cargos.map( (cargo) =>{
            return <option value={cargo.nomecargo}>{cargo.nomecargo}</option>
          })}
        </select>
      </div>
    </div>
  );
}
