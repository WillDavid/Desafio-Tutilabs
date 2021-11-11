import './App.css'; // ESTILO DO APP.JS

import React from "react";


// COMPONENTES

import SideBar from './components/SideBar';
import Header from './components/Header'
import CardStatus from './components/CardStatus';
import Table from './components/Table';

// IMAGENS QUE SÃO REPASSADOS PARA
// OS CARDS VIA PROPS

import cardIconCancelado from './assets/cardsAssets/cancelado.svg'
import cardIconEmAndamento from './assets/cardsAssets/emAndamento.svg'
import cardIconEnviados from './assets/cardsAssets/enviados.svg'


export default function App() {

	// DADOS QUE SERÃO COLOCADOS NA TABELA.
	// COMO O PROJETO NÃO ESTÁ UTILIZANDO UM DB, ENTÃO A BASE DE DADOS
	// SERÁ ESTE VETOR DE OBJETOS.

	const dataTable = [
		{id: 1, produto: 'produto A', codigo: '52189-90', status: 'ENVIADO'},
		{id: 2, produto: 'produto B', codigo: '52349-90', status: 'ENVIADO'},
		{id: 3, produto: 'produto C', codigo: '24234-90', status: 'CANCELADO'},
		{id: 4, produto: 'produto D', codigo: '56563-90', status: 'EM ANDAMENTO'},
		{id: 5, produto: 'produto E', codigo: '90689-90', status: 'ENVIADO'},
	]


	// As três funções abaixo são responsáveis por analisar o dataTable e contabilizar
	// a quantidade de produtos com status "ENVIADO", "EM ANDAMENTO" e "CANCELADO".


	let [qtdeEnviados, qtdeEmAndamento, qtdeCancelado] = [0,0,0]

	function qtdeEnviadosFunction() {
		dataTable.map( (e) => {
			if(e.status === "ENVIADO")
				qtdeEnviados+=1
		})
		return qtdeEnviados	
	}

	function qtdeEmAndamentoFunction() {
		dataTable.map( (e) => {
			if(e.status === "EM ANDAMENTO")
				qtdeEmAndamento+=1
		})
		return qtdeEmAndamento	
	}

	function qtdeCanceladosFunction() {
		dataTable.map( (e) => {
			if(e.status === "CANCELADO")
				qtdeCancelado+=1
		})
		return qtdeCancelado
	}

	
	// ESTE RETURN RENDERIZA TODOS OS ELEMENTOS DA PÁGINA.
	// NO COMPONENT CARDSTATUS, AS FUNÇÕES DE QDTEs SÃO REPASSADAS COMO PROPS,
	// ALÉM DOS STATUS DO OBJETO, AS TRÊS CORES DOS CARDS E AS IMAGENS (TODAS).

	// ABAIXO DA DIV DE COMPONENTS CARDS, O VETOR DE OBJETOS (BASE DE DADOS) É
	// REPASSADA COMO PROPOS PARA O COMPONENT TABLE.

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

