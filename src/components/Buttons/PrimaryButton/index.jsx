import "./primary.css"

export default function PrimaryButton({text,color,textColor}){
    return(
        <div className="button-body" style={{backgroundColor: color, color: textColor}}>
            <p className="button-text">{text}</p>
        </div>
    )
}