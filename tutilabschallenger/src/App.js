import './App.css';

// Components
import SideBar from './components/SideBar';
import Header from './components/Header'
import CardStatus from './components/CardStatus';
import Table from './components/Table';

// Imagens Cards 
import cardIconCancelado from './assets/cardsAssets/cancelado.svg'
import cardIconEmAndamento from './assets/cardsAssets/emAndamento.svg'
import cardIconEnviados from './assets/cardsAssets/enviados.svg'


export default function App() {

	const dataTable = [
		{id: 1, produto: 'produto a', codigo: '52189-90', status: 'ENVIADO'},
		{id: 2, produto: 'produto b', codigo: '52349-90', status: 'EM ANDAMENTO'},
		{id: 3, produto: 'produto c', codigo: '24239-90', status: 'CANCELADO'}
	]



  return (
	  <div className="app">
		  <SideBar />
		  <div className="content">
			  <Header />
			  <div className="cardsStatus">
					<CardStatus qtde={5} status="ENVIADOS" color="#1FBF84" textColor="#1FBF84" img={cardIconEnviados}/>
					<CardStatus qtde={20} status="ENVIADOS" color="#65D930" textColor="#65D930" img={cardIconEmAndamento}/>
					<CardStatus qtde={8} status="ENVIADOS" color="#D95F5F" textColor="#D95F5F" img={cardIconCancelado}/>
					
			  </div>

			  
				<Table data={dataTable}/>
			  
		  </div>
		  
	  </div>
  );
}

