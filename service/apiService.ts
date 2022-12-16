import api from "../api/api";

const apiService = (()=>{

    const createRewards = async () => {
        return api.createRewards();
    }

    // const batchTransfer = async () =>{
    //     return immutableXapi.batchTransfer("a", "b", "c");
    // }

    //Assets from our collection, we have the token address
    const distributeRewards = async (token_id: string) => {
        return api.distributeRewards();
    }

    const claimReward = async (nft_id: string | string[] | undefined, token_id: string | string[] | undefined, wallet: string) => {
        return api.claimReward(nft_id, token_id, wallet);
    }

    return {
        createRewards,
        distributeRewards,
        claimReward
    }
})();
export default apiService;