import { Link } from '@imtbl/imx-sdk'
import immutableXapi from "../api/immutableXapi";


const immutableXService = (()=>{
    const login = async () => {
        return immutableXapi.login();
    }
    return {
        login
    }
})();
export default immutableXService;