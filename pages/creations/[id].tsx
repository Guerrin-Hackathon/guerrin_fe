import ImageWithTextLayout from "../../components/ImageWithTextLayout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import immutableXService from '../../service/ImmutableXService';
import { Spinner } from '../../components/shared/Spinner';
import { useState } from 'react';

type FormValues = {
  email: string
}

export default function CreationId() {
  const router = useRouter();
  const collection_id = router.query.id as string;
  const [emails, setEmails] = useState<string[]>([])

  const {register, handleSubmit, reset, getValues, formState: {errors}} = useForm<FormValues>();

  // TODO: display tokenIds and allow them to be asigned to user emails
  const { data: tokenIds, isLoading, isError } = useQuery(['collection'], async () => {
      return await immutableXService.getTokenIdsByCollectionId(collection_id);
  }, {
      enabled: !!collection_id,
  });

  if (isLoading) return <Spinner />

  if (isError || !tokenIds) return <p>Something went wrong</p>

  // TODO:
  const onSubmit = (data: FormValues) => {}

  const addEmail = () => {
    const { email } = getValues()
    setEmails(p => [...p, email])
    reset()
  }

  // TODO: dar tokenIds e emails como arrays a partir del form

  return (
    <div>
      <ImageWithTextLayout nft_id={tokenIds[0]} />

      <p className="text-center">Available rewards: {tokenIds.length}</p>
      <form className="w-screen flex justify-center gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-lg mt-10 p-2 mr-4"
          type="email"
          placeholder="Insert email"
          {...register("email", {
            required: "Email is required",
            validate: (value) => emails.length < tokenIds.length || "No more rewards available",
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <button
          onClick={addEmail}
          className="bg-red-300 hover:bg-red-600  font-bold py-2 px-4 rounded inline-flex items-center mt-10"
        >
          <span>Add</span>
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600  font-bold py-2 px-4 rounded inline-flex items-center mt-10"
        >
          <span>Send Rewards</span>
        </button>
      </form>
      {errors.email && (
        <p className="text-center mt-2 text-red-600">{errors.email.message}</p>
      )}

      <div className="text-center">
        {emails.map((email, index) => <p key={index}>{email}</p>)}
      </div>
    </div>
  );
}
