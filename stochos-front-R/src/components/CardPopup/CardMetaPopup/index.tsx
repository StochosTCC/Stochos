import { Button } from "@mui/material";
import style from "./CardPopup.module.scss";

interface Props{
    remetente: string,
    nomemeta: string
    descricao: string,
    destinatarios: any[],
    disable: boolean
}


export default function CardPopup({remetente, nomemeta, descricao, destinatarios, disable}: Props){
    return(
        <div className={style.cardpopup}>
            <div className={style.divinput}>
                <label className={style.label} htmlFor="remetente">Remetente</label>
                <input className={style.input} type="text" name="remetente" id="remetente" value={remetente} readOnly />
            </div>
            <div className={style.divinput}>
                <label className={style.label} htmlFor="nomemeta">Nome da Meta</label>
                <input className={style.input} type="text" name="nomemeta" id="nomemeta" value={nomemeta} readOnly />
            </div>
            <div className={style.divinput}>
                <label className={style.label} htmlFor="descricao">Descricao</label>
                <textarea className={style.desc} name="descricao" id="descricao" cols={30} rows={10} value={descricao} readOnly></textarea>
            </div>
            <div className={style.divinput}>
                <label className={style.label} htmlFor="destinatarios">Destinatario</label>
                <select className={style.select} multiple name="destinatarios" id="destinatarios">
                    {destinatarios.map((dest) => {
                        return <option value={dest.id} >{dest.nomeusuario}</option>
                    })}
                </select>
            </div>
            <div className={style.botaodiv}>
                {!disable &&    <Button variant="contained" size="large" >Concluir</Button>}
            {disable && <Button variant="contained" size="large" disabled>Concluir</Button>
        }
            </div>
        </div>
    )
}

