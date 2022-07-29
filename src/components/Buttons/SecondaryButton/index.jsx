import "./secondary.css"

export default function SecondaryButton({text,color,textColor}){
    return(
        <div className="sbutton-body" style={{borderColor: color, color: textColor, backgroundColor: "#fff"}}>
            <p className="button-text">{text}</p>
        </div>
    )
}