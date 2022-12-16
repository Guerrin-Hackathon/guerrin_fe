import React, {useEffect, useState} from 'react';

const ImageWithTextLayout = ({nft_id}) => {

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

    useEffect(()=>{
        //fetch Immutable X


    })
    return (
        <div className="flex flex-wrap px-20">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-10">{title}</h1>
                {/*// <!--En caso de conflicto comunicarse con rober-->*/}
                <img src={image_url} alt="reward" className="h-[500px]"/>
            </div>
            <div className="w-1/2 mt-20 items-center justify-center">
                <p>{desc}</p>
            </div>
        </div>
    );

};

export default ImageWithTextLayout;