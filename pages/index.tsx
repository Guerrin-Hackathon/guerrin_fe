import type {NextPage} from 'next'
import Head from 'next/head'
import {useTheme} from "next-themes";
import {ToggleTheme} from "../components/ToggleTheme";
import immutableXService from "../service/ImmutableXService";


const Home: NextPage = () => {

    const {theme, setTheme} = useTheme()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Guerrín Rewards</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <ToggleTheme/>

                <h1 className="text-6xl font-bold mt-10">
                    Guerrín{' '}
                <a className="text-red-600">Rewards</a></h1>
                <button className="bg-red-500 hover:bg-red-700  mt-5 text-white font-bold py-2 px-4 rounded"  onClick={login}>Sign in</button>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                    Horno a leña desde 1932
            </footer>
        </div>
    )

     async function login() {
       let result  =  await immutableXService.login();
       if(result){
           window.localStorage.setItem("address", result.address);
           window.localStorage.setItem("starkPublicKey", result.starkPublicKey);
       }
    }
}

export default Home
