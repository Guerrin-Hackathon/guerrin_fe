import Head from 'next/head'
import type {NextPage} from 'next'
import Navbar from "../components/Navbar";
import {Container, Engine} from "tsparticles-engine";
import {useCallback} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {useRouter} from "next/router";
import {ParticleAnimation} from "../components/home/ParticleAnimation";


const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Guerrín Rewards</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold mt-10 drop-shadow-lg block rounded-full">
                    <span>🍕</span>
                    Guerrín{' '}
                    <span className="text-red-600 dark:text-red-500">Rewards</span>
                </h1>

                <button className="button absolute z-10 bottom-28 right-8" onClick={() => router.push('/create')}>
                    + Create
                </button>

                <ParticleAnimation/>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t dark:border-gray-700">
                Horno a leña desde 1932
            </footer>
        </div>
    )
}

export default Home
