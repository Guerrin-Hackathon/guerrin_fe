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
    const getAssetsFromTokenAddress = async () =>{

    }

    return {
        login,
        batchTransfer
    }
})();
export default immutableXService;