import immutableXapi from "../api/immutableXapi";

export type asset = {
    title: string;
    description: string;
    image_url: string;
    creator: string;
}

const immutableXService = (() => {

    const login = async () => {
        return immutableXapi.login();
    }

    const batchTransfer = async (ids:string[]) =>{
        return immutableXapi.batchTransfer(ids);
    }

    //Assets from our collection, we have the token address
    const getAsset = async (token_id: string) => {
        return immutableXapi.getAsset(`${process.env.ADDRESS}`, token_id);
    }

    return {
        login,
        batchTransfer,
        getAsset
    }
})();
export default immutableXService;