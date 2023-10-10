import style from './AdminTab1.module.scss'
import AdminDados from './AdminTab1.json'

  

export default function AdminTab1(){
   
    return(

    <div className={style.CRUD}>

        <div>
        {AdminDados.map((opcao) =>
         <p>{opcao.id}</p>,   
            )}
        </div>
        <div>
        {AdminDados.map((opcao) =>
         <p>{opcao.nomeusuario}</p>,   
            )}
        </div>
        <div>
        {AdminDados.map((opcao) =>
         <p>{opcao.email}</p>,   
            )}
        </div>
            <div>
        {AdminDados.map((opcao) =>
         <p>{opcao.password}</p>,   
            )}
            </div>
            <div>
        {AdminDados.map((opcao) =>
         <p>{opcao.phone}</p>,   
            )}
            </div>
    


    </div>
        

        );
}