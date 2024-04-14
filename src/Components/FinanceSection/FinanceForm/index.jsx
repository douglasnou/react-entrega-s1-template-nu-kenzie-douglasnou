import styled from "./style.module.scss"
export const FinanceForm = ({ newObject, submit, description, setDescription, money, setMoney, type, setType, addFinance }) => {

    return (
        <div className={styled.form}>
            <form onSubmit={submit} className={styled.formSection}>
                <div className={styled.formContainer}>
                    <div>
                        <label className="title4" htmlFor="description">Descrição</label>
                        <input required className="headline input" value={description} id="description" type="text"
                         placeholder="Digite aqui sua descição" onChange={(e) => setDescription(e.target.value)} />
                        <span className="body">Ex: Compra de roupas</span>
                    </div>

                    <div>
                        <label className="title4" htmlFor="money">Valor (R$)</label>
                        <input required className="headline input" id="money" type="number" placeholder="Digite o valor"
                        value={money} onChange={(e) =>setMoney(parseFloat(e.target.value))} />
                    </div>

                    <div>
                        <label className="title4" htmlFor="option">Tipo de valor</label>
                        <select required className="body input" id="option" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Escolha uma opção</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>

                    <button onClick={() => {(description && money && type) == "" ? "" : addFinance(newObject)}}>Inserir valor</button>
                </div>
            </form>
        </div>
    )
}