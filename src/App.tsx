import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Commercial from "./pages/Commercial";
import "./index.css";
import Cliente from "./pages/nested/Cliente";
import Consulta from "./pages/nested/Consultas";
import Ecommerce from "./pages/nested/Ecommerce";
import Newcliente from "./pages/nested/routeschild/NewCliente";
import ErrorPage from "./Error";
import Operations from "./pages/Operations";
import Calendar from "./pages/Calendar";
import Componentes from "./pages/Componentes";
import MiEmpresa from "./pages/MiEmpresa";
import AddNewProyect from "./pages/nested/routeschild/AddNewProyect";
import Administration from "./pages/Administration";
import Ventas from "./pages/nested/Administration/Ventas";
import Compras from "./pages/nested/Administration/Compras";
import Pagos from "./pages/nested/Administration/Pagos";
import Cobros from "./pages/nested/Administration/Cobros";
import Cuentas from "./pages/nested/Administration/Cuentas";
import TerminosyCondiciones from "./pages/TerminosyCondiciones";
import CreaContrasena from "./pages/CreaContrasena";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/operations",
    element: <Operations />,
  },
  {
    path: "/administration",
    element: <Administration />,
    children: [
      /* {
        path: "cliente",
        element: <Cliente />,
        children: [
          // Agrega una nueva propiedad 'children' para las rutas hijas de Cliente
          {
            path: "nuevocliente",
            element: <Newcliente />,
          },
        ],
      }, */
      {
        path: "Ventas",
        element: <Ventas />,
      },
      {
        path: "Compras",
        element: <Compras />,
      },
      {
        path: "Pagos",
        element: <Pagos />,
      },
      {
        path: "Cobros",
        element: <Cobros />,
      },
      {
        path: "Cuentas",
        element: <Cuentas />,
      },
    ],
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/miempresa",
    element: <MiEmpresa />,
  },
  {
    path: "/comercial",
    element: <Commercial />,
    children: [
      {
        path: "cliente",
        element: <Cliente />,
        children: [
          // Agrega una nueva propiedad 'children' para las rutas hijas de Cliente
          {
            path: "nuevocliente",
            element: <Newcliente />,
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
      {
        path: "proyecto",
        element: <AddNewProyect />,
      },
    ],
  },
  {
    path: "/componentes",
    element: <Componentes />,
  },
  {
    path: "/onboarding",
    element: "",
    children: [
      {
        path: "terminos-y-condiciones",
        element: <TerminosyCondiciones />,
      },
      {
        path: "crea-contrasena",
        element: <CreaContrasena />,
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
