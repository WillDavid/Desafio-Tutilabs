import './table.css'

// img

import eyeIcon from '../../assets/tableAssets/eye.svg'
import trashIcon from '../../assets/tableAssets/trash.svg'


export default function Table(props){

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

    return(
        <div className="tableContent"> 
            <table border="1px" cellpadding="5px" cellspacing="0">
                <thead>
                    <th>PRODUTO</th>
                    <th>CÓDIGO</th>
                    <th>STATUS</th>
                    <th>OPÇÕES</th>
                </thead>

                <tbody>
                    {renderRow()}
                </tbody>


            </table>
            
         
        </div>
    )
}