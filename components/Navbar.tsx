import React from 'react';
import {useRouter} from "next/router";
import {ToggleTheme} from "./ToggleTheme";
import {login} from "../service/login";

interface NavbarProps {
    icon: React.ReactNode
    text?: string
}


const NavbarIcon: React.FC<NavbarProps> = (props) => {
    return (<div className="relative rounded-full p-3.5 hover:bg-gray-600/20 transition-all origin-center duration-200 group">
        {props.icon}
        <span
            className="absolute w-auto p-2 min-w-max bottom-12 -left-8 md:bottom-2.5 md:left-16 text-white rounded-md shadow-md bg-gray-900/80 text-xs font-bold transition-all duration-100 scale-0 origin-bottom md:origin-left group-hover:scale-100">
            {props.text}
        </span>
    </div>)
}

const Navbar = () => {
    const router = useRouter();

    return (
        <nav
            className="fixed justify-between py-4 px-6 z-10 bottom-0 w-full h-[6rem] md:w-[7.15rem] md:top-0 md:left-0 flex md:flex-col md:h-full card-bg bg-opacity-50 backdrop-blur">
            <NavbarIcon icon={<button className="border-0 p-0 m-0 text-4xl" onClick={() => router.push('/')}>🍕</button>} />

            <div className="flex md:flex-col items-center justify-center space-x-8 md:space-x-0 md:space-y-8">
                <NavbarIcon icon={<ToggleTheme/>} text="Change Theme"/>
                <NavbarIcon icon={<button className="icon" onClick={login}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                         className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </button>
                } text="Connect Wallet"/>
            </div>
        </nav>
    );
};

export default Navbar;
