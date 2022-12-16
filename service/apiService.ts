import api from "../api/api";

const apiService = (() => {

    // const batchTransfer = async () =>{
    //     return immutableXapi.batchTransfer("a", "b", "c");
    // }

    //Assets from our collection, we have the token address
    const distributeRewards = async (ids: string[], mails: string[]) => {
        return api.distributeRewards(ids, mails);
    }

    const claimReward = async (nft_id: string | string[] | undefined, token_id: string | string[] | undefined, wallet: string) => {
        if (!nft_id || !token_id) {
            return;
        }
        return api.claimReward(nft_id, token_id, wallet);
    }

    return {
        distributeRewards,
        claimReward
    }
})();
export default apiService;