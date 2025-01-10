import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout=({children})=>{

    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}