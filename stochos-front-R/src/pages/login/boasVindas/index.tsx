import estilos from './BoasVindas.module.scss';
import './BoasVindas.module.scss';

export default function Login(){

    return(
    <div className={estilos.blocoA} >
      
        <div >
          <h1 className={estilos.titulo}>STOCHOS</h1>
        </div>
  
        <div className={estilos.boasVindas}>
          <p className={estilos.boasVindasTitulo}>Welcome to the Website!</p>

          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
            est, blandit et interdum non, gravida ut dui. Quisque id neque tellus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nam vel dui id lorem tincidunt lacinia. In
            sollicitudin erat ligula, sit amet commodo lacus egestas in.
          </p>

          <div >

            <span >
              <a href="#" >Read More</a>
            </span>
          </div>
          
        </div>
      
    </div>
    )
}
