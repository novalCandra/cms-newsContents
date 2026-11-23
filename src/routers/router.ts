import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoustContent from "../layouts/layout.content";
import Artickle from "../page/articke";
import LayoutAuth from "../layouts/LayoutAuth";
import LoginPage from "../page/auth/login";
import RegisterPage from "../page/auth/register";
import authProvider from "../auth/authProvider";

const router = createBrowserRouter([
    { path: "/", Component: App },
    {
        path: "auth", Component: LayoutAuth,
        children: [
            { path: "login", Component: LoginPage },
            { path: "register", Component: RegisterPage }
        ]
    },
    {
        Component: authProvider,
        children: [
            {
                path: "/article",
                Component: LayoustContent,
                loader: authProvider,
                children: [
                    {
                        index: true, Component: Artickle
                    }
                ]
            }
        ]
    }
])

export default router