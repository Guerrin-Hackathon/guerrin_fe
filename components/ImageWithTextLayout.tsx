import React from 'react';
import immutableXService, {asset} from "../service/ImmutableXService";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "./shared/Spinner";
import Image from "next/image";

interface ImageWithTextLayoutProps {
    nft_id: string | string[] | undefined;
}

const ImageWithTextLayout: React.FC<ImageWithTextLayoutProps> = (props) => {
    const assetQuery = useQuery(['asset'], async () => {
        if (!props.nft_id) {
            return;
        }
        return await immutableXService.getAsset(props.nft_id);
    }, {
        enabled: !!props.nft_id,
    });

    return (
        <main className="w-fit flex flex-wrap justify-center items-center sm:space-x-4">
            {
                assetQuery.isLoading ? <Spinner/> :
                    <>
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold font-mono leading-6 py-4">{assetQuery.data.title}</h1>
                            {/*// <!--En caso de conflicto comunicarse con rober-->*/}
                            <img src={assetQuery.data.image_url} alt="reward"
                                 className="w-60 rounded-3xl shadow-lg shadow-red-600/40 dark:shadow-red-400/30"/>
                        </div>
                        <div className="flex flex-col items-start mt-8 sm:mt-0 space-y-4">
                            <h2 className="text-xl font-medium leading-4">Created by:
                                {' '}
                                <span className="text-red-600 dark:text-red-400">{assetQuery.data.creator}</span>
                            </h2>
                            <p className="text-left">{assetQuery.data.description}</p>
                        </div>
                    </>
            }
        </main>
    );
};

export default ImageWithTextLayout;