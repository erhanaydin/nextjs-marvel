import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../src/components/Section/Header";
import DetailPage from "../../src/components/Section/Detail";
import hashGenerate from "../../src/utils/hashGenerate";

const Detail = ({data}) => {
    const detail = data.data.results[0];
    return (
        <>
            <Head>
                <title>{detail.name}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#EC1D24" />
                <meta name="description" content="{detail.name}" />
                <link rel="icon" href="/marvel-favicon.ico" />
            </Head>
            <Header />
            <DetailPage data={detail}/>
        </>
    );
}

export default Detail;

export async function getServerSideProps(context) {
    const { id } = context.params;
    let data=[]
    const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?${hashGenerate()}`)
    data = await  result.json()
    return{
        props:{
            data
        }
    }
}
