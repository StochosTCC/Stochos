import { Avatar } from "@mui/material";
import style from "./Card.module.scss";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { deepOrange, deepPurple, pink, red } from "@mui/material/colors";

interface Props {
    type: string
    nome: string
    nomeremetente: string,
    urgencia: number,
    data: string
}



export default function Card({ type, nome, nomeremetente, data, urgencia }: Props) {
    let color = ""
    if (type === "meta") {
        if (urgencia === 1) {
            color = style.urgencia1
        }
        else if (urgencia === 2) {
            color = style.urgencia2
        }
        else if (urgencia === 3) {
            color = style.urgencia3
        }
    }
    return (
        <div className={style.card}>
            <div className={style.cardcima}>
                <div>
                    <p className={style.nomemeta}>{nome}</p>
                    <p className={style.nomeremetente}>{nomeremetente}</p>
                </div>
                <div>
                    {randomColor(nomeremetente)}
                </div>
            </div>

            <div className={style.cardbaixo}>
                <SettingsOutlinedIcon className={style.icon} sx={{ fontSize: 40 }}></SettingsOutlinedIcon>
                <div className={style.urg_e_data}>
                    <div className={color}></div>
                    <p>{data}</p>
                </div>
            </div>
        </div>
    )
}


function randomColor(nomeremetente: string) {
    let random = Math.floor(Math.random() * 4)
    let size = 46
    let fontSize = 25
    switch (random) {
        case 1:
            return <Avatar sx={{ bgcolor: deepPurple[500], width: size, height: size, fontSize:fontSize }}>{nomeremetente[0]}</Avatar>
        case 2:
            return <Avatar sx={{ bgcolor: deepOrange[500], width: size, height: size, fontSize:fontSize }}>{nomeremetente[0]}</Avatar>
        case 3:
            return <Avatar sx={{ bgcolor: pink[500], width: size, height: size, fontSize:fontSize }}>{nomeremetente[0]}</Avatar>
        case 4:
            return <Avatar sx={{ bgcolor: red[500], width: size, height: size, fontSize:fontSize }}>{nomeremetente[0]}</Avatar>
    }
    return <Avatar sx={{ bgcolor: red[500], width: size, height: size, fontSize:fontSize }}>{nomeremetente[0]}</Avatar>
}