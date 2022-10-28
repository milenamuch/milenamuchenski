import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Contato from "../components/Contato";
import ErrorPage from "../components/ErrorPage";
import FetchNews from "../components/FetchNews";
import { PageLayout } from "../components/PageLayout";
import SignIn from "../components/SingIn";
import Sobre from "../components/Sobre";

const route = createBrowserRouter(
    createRoutesFromElements(
        //<Routes>
            <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
                <Route index path="sobre" element={<Sobre />} />
                <Route path="noticias" element={<FetchNews />} />
                <Route path="contato" element={<Contato />} />
                <Route path="login" element={<SignIn />} />
            </Route>
       // </Routes>
    )
)
const Root = () => {
    return <RouterProvider router={route} />
};

export default Root;