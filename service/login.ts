import immutableXService from "../service/ImmutableXService";
import {toast} from "react-hot-toast";

export async function login() {
    let result = await immutableXService.login();
    if (result) {
        window.localStorage.setItem("address", result.address);
        window.localStorage.setItem("starkPublicKey", result.starkPublicKey);
        toast.success('Successfully logged in!')
        setTimeout(() => {
            document.location.href = '/creations';
        }, 3000);
    }
}