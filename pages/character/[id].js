import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../src/components/Section/Header";
import DetailPage from "../../src/components/Section/Detail";
import hashGenerate from "../../src/utils/hashGenerate";
import { baseUrl } from "../../src/config/axios.config";
import { CHARACTERS_DETAIL } from "../../src/routes/apis";


const Detail = ({data}) => {
    const router = useRouter()
    const { id } = router.query
    const detail = data.data.results[0];
    return (
        <>
            <Head>
                <title>{detail.name}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#EC1D24" />
                <meta name="description" content={detail.name} />
                <link rel="icon" href="/marvel-favicon.ico" />
            </Head>
            <Header />
            <DetailPage key={id} data={detail}/>
        </>
    );
}

export default Detail;

export async function getServerSideProps(context) {
    const { id } = context.params;
    const response = await baseUrl.get(CHARACTERS_DETAIL(id,hashGenerate()))

    return {
        props: {
            data: response.data
        }
    }
}
