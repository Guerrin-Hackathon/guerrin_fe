import React from 'react';

const ImageWithTextLayout = () => {
    return (
        <div className="flex flex-wrap px-20">
            <div>
                <h1 className="text-5xl font-bold">Mi título</h1>
                <img src="/vercel.svg" alt="reward"/>
            </div>
            <div>
                <p>Anim anim ea proident occaecat
                    non minim et. Minim aliqua esse
                    eu fugiat do quis qui exercitation
                    cillum officia adipisicing eiusmod
                    occaecat eiusmod aliqua. Culpa do
                    occaecat ex adipisicing aliquip magna
                    pariatur mollit laboris elit ea ipsum
                    sit laboris exercitation. </p>
            </div>
            <button onClick={claim} className="bg-red-500 hover:bg-red-600  font-bold py-2 px-4 rounded inline-flex items-center mt-10">
                <span>Claim</span>
            </button>

        </div>
    );
    async function claim(){
        console.log("claimed")
    }
};

export default ImageWithTextLayout;