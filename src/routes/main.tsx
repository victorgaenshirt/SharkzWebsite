import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.tsx";
import {
    Workshops,
    FAQ,
    Impressum,
    Businessvideo, Hochzeitsvideo, Produktvideo, PaketeView, Musikvideo, Workflow
} from "../components";
import ErrorPage from "../ErrorPage.tsx";
import Layout from "../Layout.tsx";
import {SocialMedia} from "../components/sites/SocialMedia.tsx";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDGFc8DhA-QS1Fh0Hp5uK6re6xP6NccZ_8",
    authDomain: "sharkzwebsite.firebaseapp.com",
    projectId: "sharkzwebsite",
    storageBucket: "sharkzwebsite.appspot.com",
    messagingSenderId: "987195377209",
    appId: "1:987195377209:web:df1e45c8e585f281c92fe8",
    measurementId: "G-CF9XT83V3F"
};

const app = initializeApp(firebaseConfig);


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><App/></Layout>,
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
