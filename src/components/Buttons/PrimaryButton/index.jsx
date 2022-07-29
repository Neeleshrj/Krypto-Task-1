import "./primary.css"

export default function PrimaryButton({text,color,textColor, onClick}){
    return(
        <div className="button-body" style={{backgroundColor: color, color: textColor}} onClick={onClick}>
            <p className="button-text">{text}</p>
        </div>
    )
}