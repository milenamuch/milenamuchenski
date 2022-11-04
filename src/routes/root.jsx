import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AlbumPage from "../components/Albuns";
import FetchNews from "../components/FetchNews";
import Sobre from "../components/Sobre";
import ErrorPage from "../components/ErrorPage";
import BoasVindas from "../components/BoasVindas";
import Contato from "../components/Contato";
import { PageLayout } from "../components/PageLayout";

const route = createBrowserRouter(
  createRoutesFromElements(
    //<Routes>
    <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
      <Route index path="/" element={<BoasVindas />} />
      <Route index path="sobre" element={<Sobre />} />
      <Route index path="albuns" element={<AlbumPage />} />
      <Route path="noticias" element={<FetchNews />} />
      <Route path="contato" element={<Contato />} />
    </Route>
    // </Routes>
  )
);
const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;
