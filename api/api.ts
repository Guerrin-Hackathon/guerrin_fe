import axios from "axios";

const api_lib = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
});

const api = (()=>{

    const createRewards = ( async () => {
        try {

        } catch (error) {
            console.error(error)
        }
    })
    const distributeRewards = ( async () => {
        try {

        } catch (error) {
            console.error(error)
        }
    })

    return {
        createRewards,
        distributeRewards
    }
})();

export default api;