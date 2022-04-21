import MD5 from "crypto-js/md5";

const hashGenerate = () => {
    try {
        const timestamp = new Date().getTime();
        const public_key = process.env.NEXT_PUBLIC_KEY;
        const private_key = process.env.NEXT_PUBLIC_PRIVATE_KEY;
        const hash = MD5(timestamp + private_key + public_key).toString();
        return `ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
    } catch (error) {
        return null;
    }
};

export default hashGenerate;
