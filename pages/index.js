import Head from "next/head";
import Header from "../src/components/Section/Header";
import Content from "../src/components/Section/Content";
import {baseUrl} from "../src/config/axios.config";
import {CHARACTERS} from "../src/routes/apis";
import hashGenerate from "../src/utils/hashGenerate";
import axios from "axios";


const Home = (props) => {
	const {data} = props;
	return (
		<>
			<Head>
				<title>Marvel App</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta name="theme-color" content="#EC1D24" />
				<meta name="description" content="Marvel App Page" />
				<link rel="icon" href="/marvel-favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
			</Head>
			<Header/>
			<Content data={data} />
		</>
	);
}


export async function getStaticProps(context) {
	let data=[]
	const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=30&offset=0&${hashGenerate()}`)
	data = await  result.json()
	return{
		props:{
			data
		}
	}
}

export default Home
