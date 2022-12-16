import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <QueryClientProvider client={queryClient}>
            <Toaster position="bottom-center" reverseOrder={false}/>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    </>
}

export default MyApp
