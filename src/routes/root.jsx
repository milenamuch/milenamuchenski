import { SnowboardingRounded } from "@mui/icons-material";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import AlbumPage from "../components/Albuns";
import FetchNews from "../components/FetchNews";

import ErrorPage from "../components/ErrorPage";
import { PageLayout } from "../components/PageLayout";
import { Sobre } from "../components/Sobre";
//import { FetchNews } from "../components/FetchNews";


const HomeScreen = () => (<div>Oi Home</div>)

const route = createBrowserRouter(
    createRoutesFromElements(
        //<Routes>
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="home" element={<HomeScreen />} />
            <Route index path="sobre" element={<Sobre />} />
            <Route index path="albuns" element={<AlbumPage />} />
            <Route path="noticias" element={< FetchNews />} />
            <Route path="contato" element={<HomeScreen />} />
        </Route>
        // </Routes>
    )
)
const Root = () => {
    return <RouterProvider router={route} />
};


export default Root;