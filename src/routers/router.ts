import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoustContent from "../layouts/layout.content";
import Artickle from "../page/articke";

const router = createBrowserRouter([
    { path: "/", Component: App },
    {
        path : "/article",
        Component : LayoustContent,
        children : [
            {index : true, Component :  Artickle}
        ]
    }
])

export default router