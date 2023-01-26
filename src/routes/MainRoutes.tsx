import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home"; 
import { About } from "../pages/About"; 
import { NotFound } from "../pages/NotFound"; 
import { AboutItem } from "../pages/AboutItem"; 
import { RequireAuth } from "../RequireAuth"; 

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/sobre', element: <RequireAuth><About /></RequireAuth>},
        { path: '/sobre/:slug', element: <AboutItem />},
        { path: '*', element: <NotFound />}
    ]);
}