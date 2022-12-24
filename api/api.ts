import axios from "axios";

const api_lib = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000
});

const api = (() => {

    const createRewards = (async (title: string, description: string | undefined, amount: number, image: File, wallet: string, creator: string) => {
        try {
            //fetch to our api, creating a collection for the creator
            console.log("Creating collection");

            const formData = new FormData();
            formData.append("file", image);
            formData.append("title", title);
            description && formData.append("description", description);
            formData.append("quantity", amount.toString());
            formData.append("address", wallet);
            formData.append("creator", creator);
            return await api_lib.post("/rewards", formData);
        } catch (error) {
            console.error(error)
        }
    })
    const distributeRewards = (async (ids: string[], mails: string[]) => {
        try {
            //inform  our api, of the unclaimed links to send mails
            return await api_lib.post('/distribute', {ids:ids, mails:mails});
        } catch (error) {
            console.error(error)
        }
    })
    const claimReward = (async (nft_id: string | string[] | undefined, token: string, wallet: string) => {
        try {
            //fetch to our api, indicating which nft to send to who, with it's auth token
            return await api_lib.post('/claim', {id:nft_id, token:token, wallet:wallet});
        } catch (error) {
            console.error(error)
        }
    })

    return {
        createRewards,
        distributeRewards,
        claimReward
    }
})();

export default api;