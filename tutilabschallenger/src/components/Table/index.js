import './table.css'

// IMAGENS / ICONES QUE SERÃO UTILIZADOS NA QUARTA COLUNA DA TABELA

import eyeIcon from '../../assets/tableAssets/eye.svg'
import trashIcon from '../../assets/tableAssets/trash.svg'


export default function Table(props){

    // ESTA FUNÇÃO É RESPONSÁVEL POR CRIAR DIVs CONDICIONAIS NA COLUNA
    // STATUS DA TABELA (Vá um pouco mais para baixo para entender).
    // renderStatus() RECEBE UM ITEM DA renderRow(), ENTÃO É APLICADA
    // UMA CONDICIONAL QUE DEFINE DIFERENTES DIVS E COM DIFERENTES ESTILOS
    

    function renderStatus(item){
        if(item === "EM ANDAMENTO") {
            return(
                <div className="tdStatus tdLightGreen">
                    <spam>{item}</spam>
                </div>
            )
        }else if(item === "ENVIADO"){
            return(
                <div className="tdStatus tdGreen">
                    <spam>{item}</spam>
                </div>
            )
        }else {
            return(
                <div className="tdStatus tdRed">
                    <spam>{item}</spam>
                </div>
            )
        }
    }

    // A TABLE RECEBE A BASE DE DADOS VIA PROPS, SENDO ASSIM, É POSSÍVEL
    // FAZER UM MAP PELO CONTEÚDO DO VETOR. TEMOS UM PRODUTO E CODIGO PARA
    // CADA LINHA, JÁ O STATUS É CONSTRUÍDO NA FUNÇÃO renderStatus(), QUE
    // RECEBE COMO PARAMETRO O item.status DEVOLVIDO DO .MAP.

    // A COLUNA DAS OPÇÕES É FEITO DE FORMA PADRÃO, APENAS CHAMANDO UM IMG
    // E ESTILIZANDO VIA FOLHA DE ESTILO
    
    function renderRow(){
        return props.data.map( item => {
            return(
                <tr key={item.id}>
                    <td>{item.produto}</td>
                    <td>{item.codigo}</td>
                    <td>
                        {renderStatus(item.status)}
                    </td>
                    <td>
                        <div className="opcoes">
                            <button className="eyeButton"><img src={eyeIcon} /></button>
                            <button className="trashButton"><img src={trashIcon} /></button> 
                        </div>
                    </td>
                </tr>
                
            )
        })
    }

    // ESTE RETURN É ONDE SERÁ RENDERIZADA A TABELA.
    // A PRIMEIRA LINHA É FEITA MANUALMENTE ATRAVÉS DOS <th>.
    // JÁ O CORPO (linhas) DA TABELA É CONTRUÍDA NA FUNÇÃO renderRow()

    return(
        <div className="tableContent"> 
            <table  cellpadding="0" cellspacing="0">

                <thead>
                    <th>PRODUTO</th>
                    <th>CÓDIGO DO PRODUTO</th>
                    <th>STATUS DO PRODUTO</th>
                    <th>OPÇÕES</th>
                </thead>

                <tbody>
                    {renderRow()}
                </tbody>

            </table>
        </div>
    )
}