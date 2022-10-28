import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";
import { PageLayout } from "../components/page_layout";




const HomeScreen = () => (<div>Oi Home</div>)

const route = createBrowserRouter(
    createRoutesFromElements(
        //<Routes>
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="sobre" element={<HomeScreen />} />
            <Route path="noticias" element={<HomeScreen />} />
            <Route path="contato" element={<HomeScreen />} />
            <Route path="login" element={<HomeScreen />} />
        </Route>
        // </Routes>
    )
)
const Root = () => {
    return <RouterProvider router={route} />
};


export default Root;