import React, {useEffect} from 'react';

const ImageWithTextLayout = () => {
    return (
        <div className="flex flex-wrap px-20">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-10">Mi título</h1>
                {/*// <!--En caso de conflicto comunicarse con rober-->*/}
                <img src="/messiCopa.jpg" alt="reward" className="h-[500px]"/>
            </div>
            <div className="w-1/2 mt-20 items-center justify-center">
                <p>Anim anim ea proident occaecat
                    non minim et. Minim aliqua esse
                    eu fugiat do quis qui exercitation
                    cillum officia adipisicing eiusmod
                    occaecat eiusmod aliqua. Culpa do
                    occaecat ex adipisicing aliquip magna
                    pariatur mollit laboris elit ea ipsum
                    sit laboris exercitation. </p>
            </div>
        </div>
    );

};

export default ImageWithTextLayout;