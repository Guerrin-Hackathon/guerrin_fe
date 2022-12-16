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

    const batchTransfer = ( async (toAddress, tokenId, tokenAddress) => {
        try {
            return await link.batchNftTransfer([
                {
                    "type": "ERC721TokenType",
                    "toAddress": `${toAddress}`,
                    "tokenId": `${tokenId}`,
                    "tokenAddress": `${tokenAddress}`
                }
            ])
        } catch (error) {
            console.error(error)
        }
    })
    return {
        login,
        batchTransfer
    }
})();

export default immutableXapi;