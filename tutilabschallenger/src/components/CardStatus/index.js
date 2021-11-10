import './cardStatus.css';

export default function CardStatus(props){

    const styleCard = {
        borderLeft: '15px solid ' + props.color
    }

    const textColor = {
        color: props.textColor
    }
    return(
        <div className="cardStatus" style={styleCard}>
                <div className="cardStatusText">
                    <h3 style={textColor}>{props.status}</h3>
                    <spam>{props.qtde}</spam>

                    
                    
                </div>
                <img src={props.img} className="cardImg"></img>
            
           
        </div>
    )
}