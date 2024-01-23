import styles from "./Keyboard.module.css"

const KEYS = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z"
]
type KeyboardProp = {
    addGuessedLetter : (letter:string)=>void,
    activeLetter : string[],
    inactiveLetter:string[],
    disabled? : boolean
}
export function Keyboard({disabled = false,addGuessedLetter,activeLetter,inactiveLetter}:KeyboardProp){
    return(
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(75px ,1fr))",gap:"0.5rem" }}>
            {KEYS.map(key =>{
                const isActive = activeLetter.includes(key); //correctly guessed letter
                const isInactive = inactiveLetter.includes(key); //wrongfully guessed letter
                return <button disabled={isActive || isInactive || disabled} onClick={()=>addGuessedLetter(key)} className={`${styles.btn}  ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} `} key={key}>{key}</button>
            })}
        </div>
    )
}