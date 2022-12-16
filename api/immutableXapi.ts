import {Link} from "@imtbl/imx-sdk";
import {ImmutableXClient} from '@imtbl/imx-sdk'

let link = new Link('https://link.sandbox.x.immutable.com');

const immutableXapi = (() => {
    const login = (async () => {
        try {
            return await link.setup({})
        } catch (error) {
            console.error(error)
        }
    })

    // const batchTransfer = ( async (toAddress, tokenId, tokenAddress) => {
    //     try {
    //         return await link.batchNftTransfer([
    //             {
    //                 "type": "ERC721TokenType",
    //                 "toAddress": `${toAddress}`,
    //                 "tokenId": `${tokenId}`,
    //                 "tokenAddress": `${tokenAddress}`
    //             }
    //         ])
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    const getAsset = (async (address: string, nft_id: string) => {
        try {
            const client = await ImmutableXClient.build({
                publicApiUrl: `${process.env.IMMUTABLEX_API}`,
            })

            let assets = await client.getAssets({
                user: address,
            });

            if (assets.result) {
                for (const asset of assets.result) {
                    if (asset.token_id == nft_id) {
                        return asset.metadata;
                    }
                }
            }

        } catch (error) {
            console.error(error)
        }
    })

    return {
        login,
        //batchTransfer,
        getAsset
    }
})();

export default immutableXapi;