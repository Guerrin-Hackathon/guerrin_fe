import {NextPage} from "next";
import {useTheme} from "next-themes";
import ImageWithTextLayout from "../components/ImageWithTextLayout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { useForm } from 'react-hook-form';

const Claim:NextPage = () =>{

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();
<<<<<<< Updated upstream

    const [token, setToken] = useState<string | undefined>(undefined);
=======
    const [token, setToken] = useState(undefined);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        let nftId = router.query.nft_id;
    })

>>>>>>> Stashed changes

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <button onClick={()=>location.href="/rewards"} className=" font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-3">Go to home</span>
            </button>
            <ImageWithTextLayout nft_id={router.query.nftId}/>
            <div className="flex flex-row my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="rounded-lg mt-10 p-2 mr-4" type="text" placeholder="Insert wallet" {...register("Wallet", {required: true, pattern: /^0x[a-fA-F0-9]{40}$/i})}
                    />
                    <button type="submit" className="bg-red-500 hover:bg-red-600  font-bold py-2 px-4 rounded inline-flex items-center mt-10">
                        <span>Claim</span>
                    </button>
                </form>
            </div>
        </div>

    );

    async function onSubmit(){
        console.log("messi")
    }


}
export default Claim