import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Commercial from "./pages/Commercial";
import "./index.css";
import Cliente from "./pages/nested/Cliente";
import Consulta from "./pages/nested/Consultas";
import Ecommerce from "./pages/nested/Ecommerce";
import Newcliente from "./pages/nested/routeschild/NewCliente";
import Administration from "./pages/Administration";


let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <LandingPage />,
  },
  {
    path: "/home",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <Home />,
  },
  {
      path: "/administration",
      loader: () => ({ message: "Hello Administrator!" }),
      element: <Administration />,
    },
  {
    path: "/comercial",
    element: <Commercial />,
    children: [
      {
        path: "cliente",
        element: <Cliente />,
        children: [ // Agrega una nueva propiedad 'children' para las rutas hijas de Cliente
          {
            path: "nuevocliente",
            element: <Newcliente/>,
          },
        ],
      },
      {
        path: "consulta",
        element: <Consulta />,
      },
      {
        path: "ecommerce",
        element: <Ecommerce />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}


