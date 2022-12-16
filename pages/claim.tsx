import {NextPage} from "next";
import {useTheme} from "next-themes";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import ImageWithTextLayout from "../components/ImageWithTextLayout";
import React from "react";

const Claim:NextPage = () =>{
    const {theme, setTheme} = useTheme()
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <ImageWithTextLayout/>
            <button onClick={()=>location.href="/rewards"} className=" font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-3">Go to home</span>
            </button>
        </div>
    );

}
export default Claim