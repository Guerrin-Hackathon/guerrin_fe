import {Link} from "@imtbl/imx-sdk";

let link = new Link('https://link.sandbox.x.immutable.com');

const immutableXapi = (()=>{
    const login = ( async () => {
        try {
            let result =  await link.setup({})
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    })
    return {
        login
    }
})();

export default immutableXapi;