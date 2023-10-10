import style from "./AdminTab1.module.scss";
import AdminDados from "./AdminTab1.json";

export default function AdminTab1() {
  return (
    <div className={style.CRUD}>
      <table>
        <tr>
          <td>ID</td>
          <td>Usuário</td>
          <td>E-mail</td>
          <td>Senha</td>
          <td>Telefone</td>
        </tr>
        
        {AdminDados.map((e) => (
          <>
            <tr>
              <td>{e.id}</td>
              <td>{e.nomeusuario}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.phone}</td>
              <td>Editar</td>
              <td>Deletar</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}
