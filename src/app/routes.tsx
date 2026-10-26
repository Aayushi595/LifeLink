import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import DonorFacingPage from "../pages/donor/DonorFacingPage";
import PatientFacingPage from "../pages/patient/PatientFacingPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/donor",
    element: <DonorFacingPage />,
  },
  {
    path: "/patient",
    element: <PatientFacingPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);