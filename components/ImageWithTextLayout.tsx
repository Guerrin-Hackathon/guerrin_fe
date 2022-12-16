import React from 'react';
import immutableXService, {asset} from "../service/ImmutableXService";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "./shared/Spinner";

interface ImageWithTextLayoutProps {
    nft_id: string;
}

const ImageWithTextLayout: React.FC<ImageWithTextLayoutProps> = (props) => {
    const assetQuery = useQuery(['asset'], async () => {
        return await immutableXService.getAsset(props.nft_id);
    }, {
        enabled: !!props.nft_id,
    });

    if (assetQuery.isLoading) {
        return <Spinner/>;
    }

    return (
        <div className="flex flex-wrap px-20 w-full">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-10">{assetQuery.data.title}</h1>
                {/*// <!--En caso de conflicto comunicarse con rober-->*/}
                <img src={assetQuery.data.image_url} alt="reward" className="h-[500px]"/>
            </div>
            <div className="w-1/2 mt-20 items-center justify-center">
                <h1 className="text-4xl font-bold mb-10">Creator:
                    {' '}
                    <span className="text-red-600">{creator}</span>
                </h1>
                <p>{assetQuery.data.description}</p>
            </div>
        </div>
    );
};

export default ImageWithTextLayout;