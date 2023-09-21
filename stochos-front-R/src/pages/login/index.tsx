import estilos from './Login.module.scss'

import BoasVindas from "./boasVindas";
import Campos from "./Campos";

export default function Login() {
  return (
    <>
    <div className={estilos.grid}>
      <div className={estilos.componentes}>
        <BoasVindas />
      </div>
      <div className={estilos.componentes}>
        <Campos />
      </div>
     </div>
    </>
  );
}
