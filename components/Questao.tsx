import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
    valor: QuestaoModel
}

const letras =[
    {valor: 'A', cor: '#F2C866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85D4F2'},
    {valor: 'D', cor: '#BCE596'},
]

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function rederizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={i}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {rederizarRespostas()}
        </div>
    )
}