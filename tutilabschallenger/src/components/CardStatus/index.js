import './cardStatus.css';

export default function CardStatus(props){

    // ESTAS DUAS CONSTS SÃO RESPONSÁVEIS POR MODIFICAR AS BORDAS E 
    // COLOR FONT DOS CARDS. AMBAS CHEGAM POR PROPS.

    const styleCard = {
        borderLeft: '15px solid ' + props.color
    }

    const textColor = {
        color: props.textColor
    }

    // ESTE RETURN RECEBE AS PROPS DA APP.JS
    // A PRIMEIRA E SEGUNDA DIVS RECEBEM ESTILOS VIA CSS,
    // ENTÃO NÃO MODIFIQUE OU APAGUE AS CLASSNAMES

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