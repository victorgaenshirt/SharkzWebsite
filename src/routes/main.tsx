import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {
    Workshops,
    Impressum,
    FAQ,
    Businessvideo, Hochzeitsvideo, Produktvideo, PaketeView, Musikvideo, Workflow
} from "../components";
import ErrorPage from "../ErrorPage.tsx";
import Layout from "../Layout.tsx";
import {SocialMedia} from "../components/sites/SocialMedia.tsx";
import Home from "../components/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/faq",
        element: <Layout><FAQ /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/impressum",
        element: <Layout><Impressum /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/workflow",
        element: <Layout><Workflow /></Layout>,
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
        element: <Layout><SocialMedia /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/produkte",
        element: <Layout><Produktvideo /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/workshop",
        element: <Layout><Workshops /></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: "/musikvideo",
        element: <Layout><Musikvideo /></Layout>,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
