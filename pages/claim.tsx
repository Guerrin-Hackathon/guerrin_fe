import {NextPage} from "next";
import ImageWithTextLayout from "../components/ImageWithTextLayout";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form';
import apiService from "../service/apiService";
import {restElement} from "@babel/types";
import {Spinner} from "../components/shared/Spinner";
import Navbar from "../components/Navbar";
import immutableXService from "../service/ImmutableXService";

type FormValues = {
    wallet: string
}

const Claim: NextPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const router = useRouter();

    return (
        <div className="flex min-h-screen container flex-col items-center justify-center py-2">

            <Navbar/>

            <ImageWithTextLayout nft_id={router.query.nftId}/>

            <div className="flex flex-row my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
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

    type FormDataDistribute = {
            ids:string[],
            mails:string[]
    }
    async function onSubmitDistribute(data:FormDataDistribute){

        // transfer Immutable X tokens to our address
        let imResult = await immutableXService.batchTransfer(data.ids);

        //call api informing transaction
        let apiResult = await apiService.distributeRewards(data.ids, data.mails);

    }


}
export default Claim