import styled from "./styled.module.scss"
export const FinanceTotal = ({ noteFinance }) => {

    const newFinancies = noteFinance.reduce((add, now) => {
        return now.type === "Entrada" ? add + now.value : add - now.value
    }, 0)

    return (
        <div className={styled.total}>
            <div className={styled.totalSection}>
                <div className={styled.totalContainer}>
                    <div className={styled.totalText}>
                        <h3 className="title3">Total: </h3>
                        <p className="body">O valor se refere ao saldo.</p>
                    </div>
                    <span className="title3">{newFinancies.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</span>
                </div>
            </div>
        </div>
    )
}