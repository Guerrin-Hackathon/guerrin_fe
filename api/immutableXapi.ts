import {ERC721TokenType, Link} from "@imtbl/imx-sdk";
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

    const batchTransfer = ( async (ids:string[]) => {
        try {
            let payload = [];

            for(const id of ids){
                payload.push({
                    "type": ERC721TokenType.ERC721,
                    "toAddress": `${process.env.ADDRESS}`,
                    "tokenId": `${id}`,
                    "tokenAddress": `${process.env.CONTRACT_ADDRESS}`
                });
            }
            return await link.batchNftTransfer(payload);
        } catch (error) {
            console.error(error)
        }
    })

    const getTokenIdsByCollectionId = (async (address: string, collection_id: string) => {
        try {
            const client = await ImmutableXClient.build({
                publicApiUrl: `${process.env.IMMUTABLEX_API}`,
            })

            const assets = await client.getAssets({
                user: address,
            })

            if (assets.result) {
                const tokenIds = [];
                for (const asset of assets.result) {
                    // @ts-ignore
                    if (asset.metadata.reward == collection_id) {
                        tokenIds.push(asset.token_id);
                    }
                }
                return tokenIds;
            }
        } catch (error) {
            console.error(error)
        }
    })

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
        batchTransfer,
        getAsset,
        getTokenIdsByCollectionId,
    }
})();

export default immutableXapi;