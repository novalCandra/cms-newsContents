import { Outlet } from "react-router-dom"
import NavbarAuth from "../components/navbarAuth"
import FooterAuth from "../components/footerAuth"

const LayoutAuth = () => {
    return (
        <>
            <NavbarAuth />
            <Outlet />
            <FooterAuth />
        </>
    )
}

export default LayoutAuth