import React, {useEffect, useState} from 'react';
import immutableXService from "../service/ImmutableXService";

interface ImageWithTextLayoutProps {
    nft_id: string;
}

const ImageWithTextLayout: React.FC<ImageWithTextLayoutProps> = (props) => {

    const [title, setTitle] = useState("No title fetched");
    const [desc, setDesc] = useState("Anim anim ea proident occaecat\n" +
        "                    non minim et. Minim aliqua esse\n" +
        "                    eu fugiat do quis qui exercitation\n" +
        "                    cillum officia adipisicing eiusmod\n" +
        "                    occaecat eiusmod aliqua. Culpa do\n" +
        "                    occaecat ex adipisicing aliquip magna\n" +
        "                    pariatur mollit laboris elit ea ipsum\n" +
        "                    sit laboris exercitation.");
    const [image_url, setImageUrl]= useState("/messiCopa.jpg");
    const [creator, setCreator] = useState('Coscu');

    useEffect(() => {
            async function fetchImmutableX() {
                let asset = await immutableXService.getAsset(props.nft_id);
                if (!asset)
                    return;
                setTitle(asset.title);
                setDesc(asset.description);
                setImageUrl(asset.image_url);
                setCreator(asset.creator);
            }
             fetchImmutableX();
        }, [props.nft_id]);

    return (
        <div className="flex flex-wrap px-20 w-full">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-10">{title}</h1>
                {/*// <!--En caso de conflicto comunicarse con rober-->*/}
                <img src={image_url} alt="reward" className="h-[500px]"/>
            </div>
            <div className="w-1/2 mt-20 items-center justify-center">
                <h1 className="text-4xl font-bold mb-10">Creator:
                    {' '}
                    <span className="text-red-600">{creator}</span>

                </h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ImageWithTextLayout;