import axios from "axios";

const api_lib = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
});

const api = (()=>{

    const createRewards = ( async (title:string , description:string|undefined , amount:number, image:File) => {
        try {
            //fetch to our api, creating a collection for the creator
        } catch (error) {
            console.error(error)
        }
    })
    const distributeRewards = ( async (ids:string[], mails:string[]) => {
        try {
            //inform  our api, of the unclaimed links to send mails
        } catch (error) {
            console.error(error)
        }
    })
    const claimReward = ( async (nft_id:string | string[] | undefined, token:string, wallet:string) => {
        try {
         //fetch to our api, indicating which nft to send to who, with it's auth token
            console.log("success")
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