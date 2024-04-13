import { Header } from "../Header"

export const TemplateDefault = ({children})=>{
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        </>
    )
}