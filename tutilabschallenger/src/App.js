import './App.css';

import React, {useEffect, useState} from "react";

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
		{id: 2, produto: 'produto b', codigo: '52349-90', status: 'ENVIADO'},
		{id: 3, produto: 'produto c', codigo: '24234-90', status: 'CANCELADO'},
		{id: 4, produto: 'produto d', codigo: '56563-90', status: 'EM ANDAMENTO'},
		{id: 5, produto: 'produto e', codigo: '90689-90', status: 'ENVIADO'},
		{id: 6, produto: 'produto f', codigo: '65687-90', status: 'CANCELADO'}
	]

	const [qtdEnviados, setQtdEnviados] = useState(0);

	let qtdeEnviados = 0
	let qtdeEmAndamento = 0
	let qtdeCancelado = 0
	
	function qtdeEnviadosFunction (){
		const list = dataTable.map( (e) => {
			if(e.status === "ENVIADO")
				qtdeEnviados = qtdeEnviados + 1
		})
		return qtdeEnviados	
	}

	function qtdeEmAndamentoFunction (){
		const list = dataTable.map( (e) => {
			if(e.status === "EM ANDAMENTO")
				qtdeEmAndamento = qtdeEmAndamento + 1
		})
		return qtdeEmAndamento	
	}

	function qtdeCanceladosFunction (){
		const list = dataTable.map( (e) => {
			if(e.status === "ENVIADO")
				qtdeCancelado = qtdeCancelado + 1
		})
		return qtdeCancelado
	}
	

  return (
	  <div className="app">
		  <SideBar />
		  <div className="content">
			  <Header />
			  <div className="cardsStatus">
					<CardStatus qtde={qtdeEnviadosFunction()} status="ENVIADOS" color="#1FBF84" textColor="#1FBF84" img={cardIconEnviados}/>
					<CardStatus qtde={qtdeEmAndamentoFunction()} status="EM ANDAMENTO" color="#65D930" textColor="#65D930" img={cardIconEmAndamento}/>
					<CardStatus qtde={qtdeCanceladosFunction()} status="CANCELADOS" color="#D95F5F" textColor="#D95F5F" img={cardIconCancelado}/>
					
			  </div>

			  
				<Table data={dataTable}/>
			  
		  </div>
		  
	  </div>
  );
}

