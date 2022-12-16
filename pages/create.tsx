import {NextPage} from "next";
import {useForm} from "react-hook-form";
import React from "react";
import apiService from "../service/apiService";

type CreationFormValues = {
    title: string,
    description: string,
    amount: number,
    image: File
}

const Create:NextPage = () =>{
    const {register, handleSubmit, formState: {errors}} = useForm<CreationFormValues>();

    return (
        <div  className="flex px-20 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="rounded-lg mt-10 p-2 mr-4"
                       type="text"
                       placeholder="Place your title here"
                       {...register("title",
                           {
                               required: "Title is required"
                           })}
                       aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && <p className=" mt-2 text-red-600">{errors.title.message}</p>}
                <textarea className="rounded-lg mt-10 p-2 mr-4"
                       placeholder="Why is this reward the best?"
                       {...register("description")}
                       aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description && <p className=" mt-2 text-red-600">{errors.description.message}</p>}
                <input type="file"
                       {...register("image", {
                           required: "Chad Image is required"
                       })}
                       aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image && <p className=" mt-2 text-red-600">{errors.image.message}</p>}
                <input type="number"
                       {...register("amount", {
                           required: "Amount is required fellow Linceso",
                           min: {
                               value: 18,
                               message:"Please don't go to jail! Minimum: 18"
                           },
                           max: 69
                       })}
                       aria-invalid={errors.amount ? "true" : "false"}
                       placeholder="Amount of rewards to be generated"
                />
                {errors.amount && <p className=" mt-2 text-red-600">{errors.amount.message}</p>}
                <button type="submit" className="bg-red-500 hover:bg-red-600  font-bold py-2 px-4 rounded inline-flex items-center mt-10">
                    <span>Create</span>
                </button>
            </form>

        </div>
    );

    async function onSubmit(data:CreationFormValues){
        let result = await apiService.createRewards(data.title, data.description, data.amount, data.image);
    }
}
export default Create