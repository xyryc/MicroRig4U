import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cases from "../components/Cases";
import About from "../pages/About";
import Cart from "../pages/Cart";
import CaseDetails from "../pages/CaseDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Cases />,
        loader: () => fetch("../sff-case.json"),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/caseDetails/:product_id",
        element: <CaseDetails />,
        loader: () => fetch("../sff-case.json"),
      },
    ],
  },
]);

export default routes;
