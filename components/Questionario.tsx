import QuestaoModel from '../model/questao'
import styles from '../styles/Questionario.module.css'
import Botao from './Botao'
import Questao from './Questao'

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps){

    function respostaFornecida(indice: number){
            if(props.questao.naoRespondida){
                props.questaoRespondida(props.questao.respoderCom(indice))
            }
    }
    return(
        <div className={styles.questionario}>
            {props.questao ? //caso demore pra renderizar
                <Questao 
                valor={props.questao}
                tempoPraResposta={6}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irPraProximoPasso}
            /> : false
            }
            
            <Botao onClick={props.irPraProximoPasso}
                    texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
        </div>
    )
}