import {Link} from "@imtbl/imx-sdk";
import { ImmutableXClient } from '@imtbl/imx-sdk'
import {Integer} from "io-ts";

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

    const getAsset =  ( async (address:string, nft_id:string) => {
        try {
            const client = await ImmutableXClient.build({
                publicApiUrl: 'https://api.sandbox.x.immutable.com/v1',
            })

            let assets =  await client.getAssets({
                user: "0x73D873D25BBE8BaFA27dD20c95A71AF125820a7C",
            });
            console.log(assets.result[parseInt(nft_id)].metadata)
            return assets.result[parseInt(nft_id)].metadata;
        } catch (error) {
            console.error(error)
        }
    })

    return {
        login,
        batchTransfer,
        getAsset
    }
})();

export default immutableXapi;