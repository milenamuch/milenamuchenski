import { SnowboardingRounded } from "@mui/icons-material";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import AlbumPage from "../components/Albuns";

import ErrorPage from "../components/ErrorPage";
import { PageLayout } from "../components/page_layout";
import { Sobre } from "../components/sobre";


const HomeScreen = () => (<div>Oi Home</div>)

const route = createBrowserRouter(
    createRoutesFromElements(
        //<Routes>
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="home" element={<HomeScreen />} />
            <Route index path="sobre" element={<Sobre />} />
            <Route index path="albuns" element={<AlbumPage />} />
            <Route path="noticias" element={<HomeScreen />} />
            <Route path="contato" element={<HomeScreen />} />
        </Route>
        // </Routes>
    )
)
const Root = () => {
    return <RouterProvider router={route} />
};


export default Root;