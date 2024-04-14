import { FinanceCard } from "./FinanceCard"
import styled from "./style.module.scss"
export const FinanceList = ({ noteFinance, setNoteFinance, removeFinance }) => {
    return (
        <div className={styled.list}>
            <div className={styled.financeList}>
                <span className="title3">Resumo financeiro</span>
                {
                    noteFinance == "" ? <h2 className="title2">Você ainda não possui nenhum lançamento.</h2> :
                        <ul className={styled.financeListContainer}>
                            {
                                noteFinance.map(financies => (
                                    <FinanceCard noteFinance={noteFinance} setNoteFinance={setNoteFinance}
                                        key={financies.id} financies={financies} removeFinance={removeFinance} />
                                ))
                                
                            }
                        </ul>
                }
            </div>
        </div>
    )
}