export default function Table(props){

    const keys = Object.keys(props.data[0])

    const Row = ({ record}) => {
        const keys = Object.keys(record)
        return (
            <tr key={record.id}>
                {
                    keys.map( key => <td key={key}>{record[key]}</td>)
                }
            </tr>
        )
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>{
                        keys.map(key => <th key={key}>{key}</th>)
                        }</tr>

                </thead>

                <tbody>
                    {props.data.map(record => <Row record={record} />)}
                </tbody>


            </table>
            
            <h2>{JSON.stringify(props.data)}</h2> 
        </div>
    )
}