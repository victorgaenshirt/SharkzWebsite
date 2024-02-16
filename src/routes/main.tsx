import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.tsx";
import {
    Ablauf,
    Workshops,
    Checkliste,
    Datenschutz,
    FAQ,
    Impressum,
     Businessvideo, Hochzeitsvideo, Produktvideo, PaketeView
} from "../components";
import ErrorPage from "../ErrorPage.tsx";
import Layout from "../Layout.tsx";
import {SocialMedia} from "../components/sites/SocialMedia.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><App/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/checkliste",
        element: <Checkliste />,
        errorElement: <ErrorPage />
    },
    {
        path: "/faq",
        element: <Layout><FAQ /></Layout>,
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
        element: <Workshops />,
        errorElement: <ErrorPage />
    },
    {
        path: "/pakete",
        element: <Layout><PaketeView /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/business",
        element: <Layout><Businessvideo /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/hochzeit",
        element: <Layout><Hochzeitsvideo /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/social",
        element: <SocialMedia />,
        errorElement: <ErrorPage />
    },
    {
        path: "/produkte",
        element: <Produktvideo />,
        errorElement: <ErrorPage />
    },
    {
        path: "/workshop",
        element: <Workshops />,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
