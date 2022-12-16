
import immutableXapi from "../api/immutableXapi";


const immutableXService = (()=>{

    const login = async () => {
        return immutableXapi.login();
    }
    const batchTransfer = async () =>{
        return immutableXapi.batchTransfer("a", "b", "c");
    }

    //Assets from our collection, we have the token address
    const getAsset = async (token_id) => {
        return immutableXapi.getAsset(`${process.env.ADDRESS}`, token_id);
    }

    return {
        login,
        batchTransfer,
        getAsset
    }
})();
export default immutableXService;