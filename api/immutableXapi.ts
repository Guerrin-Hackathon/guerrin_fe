import {Link} from "@imtbl/imx-sdk";

let link = new Link('https://link.sandbox.x.immutable.com');

const immutableXapi = (()=>{
    const login = ( async () => {
        try {
            return await link.setup({})
        } catch (error) {
            console.error(error)
        }
    })
    return {
        login
    }
})();

export default immutableXapi;