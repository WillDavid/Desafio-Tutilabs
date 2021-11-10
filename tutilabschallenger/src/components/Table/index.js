import './table.css'
export default function Table(props){

    const redStyle = {
        backgroundColor: 'red'
    }

    console.log(props.data[1].status)

    
    

    

    function renderRow(){
        return props.data.map( item => {
            return(
                <tr key={item.id}>
                    <td>{item.produto}</td>
                    <td>{item.codigo}</td>
                    <td><div className="tdStatus" style={redStyle}><spam>{item.status}</spam></div></td>
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
                </thead>

                <tbody>
                    {renderRow()}
                </tbody>


            </table>
            
         
        </div>
    )
}