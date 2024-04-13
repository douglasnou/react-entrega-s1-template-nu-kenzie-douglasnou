import nuKenzieLogo from "../../assets/Nu-Kenzie.svg"
import styled from "./style.module.scss"
export const Header = ()=>{
    return(
        <header className={styled.headerSection}>
            <div>
                <img src={nuKenzieLogo} alt="Logo NuKenzie"/>
            </div>
        </header>
    )
}