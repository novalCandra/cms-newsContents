import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"


const LayoustContent = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default LayoustContent
