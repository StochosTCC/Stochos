import Card from "../../components/Card";
import dataMeta from "./meta.json";

export default function Metas(){

    return(
            <div>
                {dataMeta.map((value => (
                    <div>
                        <Card type="meta" data={value.data} nome={value.nome} nomeremetente={value.nomeremetente} urgencia={value.urgencia}/>
                    </div>
                )))}
            </div>
        )
}