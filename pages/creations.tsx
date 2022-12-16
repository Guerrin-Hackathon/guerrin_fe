import {NextPage} from "next";
import Home from "./index";
import {useTheme} from "next-themes";
import {ToggleTheme} from "../components/ToggleTheme";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Creations:NextPage = () =>{
    const {theme, setTheme} = useTheme()
    return (
        <>
            <Navbar/>
            <SideBar></SideBar>
        </>
    );

}
export default Home