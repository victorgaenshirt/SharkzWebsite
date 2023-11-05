import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import {Ablauf, AGB, Checkliste, Datenschutz, FAQ, Impressum} from "./components";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/checkliste",
        element: <Checkliste />,
        errorElement: <ErrorPage />
    },
    {
        path: "/faq",
        element: <FAQ />,
        errorElement: <ErrorPage />
    },
    {
        path: "/ablauf",
        element: <Ablauf />,
        errorElement: <ErrorPage />
    },
    {
        path: "/impressum",
        element: <Impressum />,
        errorElement: <ErrorPage />
    },
    {
        path: "/datenschutz",
        element: <Datenschutz />,
        errorElement: <ErrorPage />
    },
    {
        path: "/agb",
        element: <AGB />,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
