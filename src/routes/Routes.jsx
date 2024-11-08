import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cases from "../components/Cases";

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
    ],
  },
]);

export default routes;
