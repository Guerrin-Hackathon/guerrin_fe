import {NextPage} from "next";
import {useForm} from "react-hook-form";
import React from "react";
import apiService from "../service/apiService";
import Navbar from "../components/Navbar";

type CreationFormValues = {
    title: string,
    description: string,
    amount: number,
    image: File
}

const Create: NextPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<CreationFormValues>();

    return (
        <>
            <Navbar/>

            <main className="px-20 min-h-screen w-fit mx-auto items-center justify-center py-20">
                <h1 className="text-3xl font-bold my-4">Create your reward 🎁</h1>
                <form className="p-6 card-bg rounded-2xl shadow-lg flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title" className="flex-col flex">
                        <h2 className="text-md">Title*</h2>
                        <input className="form"
                               type="text"
                               placeholder="Enter your title here"
                               {...register("title",
                                   {
                                       required: "Title is required"
                                   })}
                               aria-invalid={errors.title ? "true" : "false"}
                        />
                        {errors.title && <p className=" mt-2 text-red-600">{errors.title.message}</p>}
                    </label>

                    <label htmlFor="description" className="flex-col flex">
                        <h2 className="text-md">Description</h2>
                        <textarea className="form"
                                  placeholder="Why is this reward the best?"
                                  {...register("description")}
                                  aria-invalid={errors.description ? "true" : "false"}
                        />
                        {errors.description && <p className=" mt-2 text-red-600">{errors.description.message}</p>}
                    </label>

                    <input type="file"
                           {...register("image", {
                               required: "Chad Image is required"
                           })}
                           aria-invalid={errors.image ? "true" : "false"}
                           className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                    />
                    {errors.image && <p className=" mt-2 text-red-600">{errors.image.message}</p>}

                    <label htmlFor="Amount" className="flex-col flex">
                        <h2 className="text-md">Amount*</h2>
                        <input type="number"
                               {...register("amount", {
                                   required: "Amount is required fellow Linceso",
                                   min: {
                                       value: 18,
                                       message: "Please don't go to jail! Minimum: 18"
                                   },
                                   max: 69
                               })}
                               aria-invalid={errors.amount ? "true" : "false"}
                               placeholder="Enter rewards to be generated"
                               className="form"
                        />
                        {errors.amount && <p className=" mt-2 text-red-600">{errors.amount.message}</p>}
                    </label>

                    <button type="submit" className="button w-fit">
                        <span>Create</span>
                    </button>
                </form>
            </main>
        </>
    );

    async function onSubmit(data: CreationFormValues) {
        let result = await apiService.createRewards(data.title, data.description, data.amount, data.image);
    }
}
export default Create