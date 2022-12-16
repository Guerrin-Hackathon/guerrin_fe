import immutableXService from "../service/ImmutableXService";
import {toast} from "react-hot-toast";
import {router} from "next/client";

export async function login() {
    let result = await immutableXService.login();
    if (result) {
        window.localStorage.setItem("address", result.address);
        toast.success('Successfully logged in!')
    }
}