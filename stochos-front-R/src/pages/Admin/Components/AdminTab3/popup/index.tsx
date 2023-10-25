import { Button } from '@mui/material';
import { useState } from 'react';
import style from "./Popup.module.scss"

export default function Popupsetor(){

    return(
        <form className={style.form}>
        <div className={style.divinput}>
          <label htmlFor="nomesetor">Nome do Setor</label>
          <input  type="text" name="nomesetor" id="nomesetor" defaultValue="setor"/>
          </div>
        
        <Button className={style.botao} size="large" variant="contained" type="submit"> Criar Cargo</Button>
      </form>
    )
}