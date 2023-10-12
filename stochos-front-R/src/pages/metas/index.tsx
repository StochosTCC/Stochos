import Card from "../../components/Card";
import dataMeta from "./meta.json";
import dataUser from "../usuario/userinfo.json";
import style from "./Meta.module.scss";

export default function Metas() {
    let userinfo = dataUser[0]
    console.log(userinfo)
    console.log(dataUser)

    return (
        <div>
            <div className={style.metascriadas}>
                <h1 className={style.titulo}>Metas Criadas</h1>
                <div className={style.metas}>
                    {dataMeta.map((value => {
                        if (value.nomeremetente === userinfo.nome) {
                            return (
                                <div className={style.meta}>
                                    <Card type="meta" data={value.data} nome={value.nome} nomeremetente={value.nomeremetente} urgencia={value.urgencia} />
                                </div>
                            )
                        }
                        return null;
                    }))}
                </div>
            </div>

            <div className={style.metascriadas}>
                <h1 className={style.titulo}>Metas Para Fazer</h1>
                <div className={style.metas}>
                    {dataMeta.map((value => {
                        if (value.nomeremetente !== userinfo.nome) {
                            return <Card type="meta" data={value.data} nome={value.nome} nomeremetente={value.nomeremetente} urgencia={value.urgencia} />
                        }
                        return null;
                    }))}
                </div>
            </div>

            <div className={style.divbotao}>
                <button className={style.botao}>Criar Meta</button>
            </div>
        </div>
    )
}