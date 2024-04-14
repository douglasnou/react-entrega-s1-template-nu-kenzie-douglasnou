import { finance } from "../../data/finance"
import { useState } from "react"
import { FinanceForm } from "./FinanceForm"
import { FinanceList } from "./FinanceList"
import { FinanceTotal } from "./FinanceTotal"
import styled from "./style.module.scss"

export const FinanceSection = () => {

    const [description, setDescription] = useState("");
    const [money, setMoney] = useState("");
    const [type, setType] = useState("");
    const [noteFinance, setNoteFinance] = useState(finance);
    
    const submit = (e)=>{
        e.preventDefault();
        setDescription("");
        setMoney("");
        setType("");
    }

    const newObject = { title: description, type: type, value: money };

    const addFinance = (note) => {
        const newFinance = { ...note, id: crypto.randomUUID(), title: description, type: type, value: money };
        const newFinancies = [...noteFinance, newFinance];
        setNoteFinance(newFinancies);
    }

    const removeFinance = (removeId)=>{
        const newFinancies = noteFinance.filter(finance => finance.id !== removeId)
        setNoteFinance(newFinancies)
    }

    return (
        <section className={styled.financeSection}>
            <div className={styled.sectionContainer}>
                <div>
                    <FinanceForm
                        description={description}
                        setDescription={setDescription}
                        money={money} setMoney={setMoney}
                        type={type} setType={setType}
                        noteFinance={noteFinance}
                        setNoteFinance={setNoteFinance}
                        submit={submit} addFinance={addFinance}
                        newObject={newObject} />
                    {
                        noteFinance == "" ? "" :
                        <FinanceTotal noteFinance={noteFinance} />
                    }
                </div>
                <FinanceList
                noteFinance={noteFinance} setNoteFinance={setNoteFinance}
                removeFinance={removeFinance} />
            </div>
        </section>
    )
}