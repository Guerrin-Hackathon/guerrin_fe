import { Link } from '@imtbl/imx-sdk'
import immutableXapi from "../api/immutableXapi";


const immutableXService = (()=>{

    const login = async () => {
        return immutableXapi.login();
    }
    const batchTransfer = async () =>{
        return immutableXapi.batchTransfer("a", "b", "c");
    }

    //Assets from our collection, we have the token address
    const getAssets = async (wallet) =>{
       return immutableXapi.getAssets(wallet);
    }

    return {
        login,
        batchTransfer,
        getAssets
    }
})();
export default immutableXService;