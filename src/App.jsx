import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import './firebase'
import "./App.css";
import RootLayout from "./pages/RootLayout";
import AnimalsA from "./pages/AnimalsA";
import AnimalsB from "./pages/AnimalsB";
import Clothes from "./pages/Clothes";
import Emotions from "./pages/Emotions";
import ActionsA from "./pages/ActionsA";
import ActionsB from "./pages/ActionsB";
import Transport from "./pages/Transport";
import Food from "./pages/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "animals-1",
        element: <AnimalsA />,
      },
      {
        path: "animals-2",
        element: <AnimalsB />,
      },
      {
        path: "clothes",
        element: <Clothes />,
      },
      {
        path: "emotions",
        element: <Emotions />,
      },
      {
        path: "actions-1",
        element: <ActionsA />,
      },
      {
        path: "actions-2",
        element: <ActionsB />,
      },
      {
        path: "transport",
        element: <Transport />,
      },
      {
        path: "food",
        element: <Food />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/reg",
    element: <RegistrationPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
