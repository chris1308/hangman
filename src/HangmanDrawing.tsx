const HEAD = (
    <div style={{ 
        border:"10px solid black",
        borderRadius:"100%",
        width:"50px",
        height : "50px",
        position:"absolute",
        top:"50px",
        right:"-30px"
     }} />
)
const BODY = (
    <div style={{ 
        background:"black",        
        width:"10px",
        height : "100px",
        position:"absolute",
        top:"120px",
        right:"0px"
     }} />
)
const RIGHT_ARM = (
    <div style={{ 
        background:"black",        
        width:"100px",
        height : "10px",
        position:"absolute",
        top:"150px",
        right:"-100px",
        rotate : "-30deg",
        transformOrigin:"left bottom"
     }} />
)
const LEFT_ARM = (
    <div style={{ 
        background:"black",        
        width:"100px",
        height : "10px",
        position:"absolute",
        top:"150px",
        right:"10px",
        rotate : "30deg",
        transformOrigin:"right bottom"
     }} />
)
const RIGHT_LEG = (
    <div style={{ 
        background:"black",        
        width:"100px",
        height : "10px",
        position:"absolute",
        top:"210px",
        right:"-90px",
        rotate : "60deg",
        transformOrigin:"left bottom"
     }} />
)
const LEFT_LEG = (
    <div style={{ 
        background:"black",        
        width:"100px",
        height : "10px",
        position:"absolute",
        top:"210px",
        right:"0px",
        rotate : "-60deg",
        transformOrigin:"right bottom"
     }} />
)

const BODY_PARTS = [
    HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG
]

type HangmanDrawingProp = {
    numberOfGuesses : number
}
export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProp){

    return (
        <div style={{ position:"relative" }}>
            {BODY_PARTS.slice(0,numberOfGuesses)}
            <div style={{ height:"50px", width:"10px",position:"absolute", top:0, right:0, background:"black" }} />
            <div style={{ height:"10px", width:"200px",marginLeft:"120px", background:"black" }} />
            <div style={{ height:"400px", width:"10px",marginLeft:"120px", background:"black" }} />
            <div style={{ height:"10px", width:"250px", background:"black" }} />
        </div>
    )
}