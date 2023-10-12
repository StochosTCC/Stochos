import Card from "../../components/Card";
import dataMeta from "./meta.json";
import dataUser from "../usuario/userinfo.json";

export default function Metas() {
    let userinfo = dataUser[0]
    console.log(userinfo)
    console.log(dataUser)

    return (
        <div>
            <div>
                <h1>Metas Criadas</h1>
                <div>
                    {dataMeta.map((value => {
                        if (value.nomeremetente === userinfo.nome) {
                            return <Card type="meta" data={value.data} nome={value.nome} nomeremetente={value.nomeremetente} urgencia={value.urgencia} />
                        }
                        return null;
                    }))}
                </div>
            </div>

            <div>
                <h1>Metas Para Fazer</h1>
                <div>
                    {dataMeta.map((value => {
                        if (value.nomeremetente !== userinfo.nome) {
                            return <Card type="meta" data={value.data} nome={value.nome} nomeremetente={value.nomeremetente} urgencia={value.urgencia} />
                        }
                        return null;
                    }))}
                </div>
            </div>

            <div>
                <button>Criar Meta</button>
            </div>
        </div>
    )
}