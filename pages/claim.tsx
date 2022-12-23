import {NextPage} from "next";
import ImageWithTextLayout from "../components/ImageWithTextLayout";
import React from "react";
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form';
import Navbar from "../components/Navbar";
import apiService from "../service/apiService";

type FormValues = {
    wallet: string
}

const Claim: NextPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">

            <Navbar/>

            <ImageWithTextLayout nft_id={router.query.nftId}/>

            <div className="flex flex-row my-4">
                <form className="space-x-4" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form"
                           type="text"
                           placeholder="Insert wallet"
                           {...register("wallet", {
                               required: "Wallet is required", pattern: {
                                   value: /^0x[a-fA-F0-9]{40}$/g,
                                   message: "Please input wallet format"
                               }
                           })}
                           aria-invalid={errors.wallet ? "true" : "false"}
                    />

                    <button type="submit" className="button">
                        <span>Claim</span>
                    </button>

                    {errors.wallet && <p className="mt-2 text-red-600">{errors.wallet.message}</p>}
                </form>
            </div>
        </div>
    );

    async function onSubmit(data: FormValues) {
        let result = await apiService.claimReward(router.query.nftId, router.query.token, data.wallet);
    }

}
export default Claim