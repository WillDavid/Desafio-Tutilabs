import './header.css'
import userProfileAsset from '../../assets/headerAssets/user.svg'

export default function Header(){
    return(
        <div className="headerContent">
            <h2>Controle de Entregas</h2>
            <div className="profile">
                <spam>Buno Caldas</spam>
                <img src={userProfileAsset}/>
                
            </div>
        </div>
    )
}