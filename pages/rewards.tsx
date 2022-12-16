import {NextPage} from "next";
import {useTheme} from "next-themes";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Rewards:NextPage = () =>{
    const {theme, setTheme} = useTheme()
    return (
        <>
            <Navbar/>
            <SideBar></SideBar>
        </>
    );

}
export default Rewards