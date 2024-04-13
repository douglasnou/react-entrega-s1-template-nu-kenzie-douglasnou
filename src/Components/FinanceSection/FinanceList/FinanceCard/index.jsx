import styled from "./style.module.scss"
export const FinanceCard = ({removeFinance, financies}) => {


    return (
        financies.title, financies.value == "" ? "" :

        <li className={`${styled.card} ${financies.type == "Entrada" ? styled.green : styled.grey}`}>
            <div className={styled.cardItem}>
                <h3 className="title3">{financies.title}</h3>
                <p className="body">{financies.type}</p>
            </div>
            <div className={styled.cardItem}>
                <span className="body">{financies.value.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</span>
                <button onClick={()=>removeFinance(financies.id)} >Excluir</button>
            </div>
        </li>
    )
}