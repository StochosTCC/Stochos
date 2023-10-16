import styles from "./PopupUser.module.scss"
import Button from "@mui/material/Button";

export default function PopoverUser() {
  return (
    <>
    <div className={styles.botoes}>
     
        <a href="/Admin">
            <Button className={styles.botao}>
                Administrador</Button>
        </a>
     
   
     
        <a href="/Usuario">
            
        <Button className={styles.botao}>Usuário</Button>
        </a>
     
        <a href="/Login">
        <Button className={styles.botao}>Sair</Button>
        </a>
    </div>
    </>
  );
}
