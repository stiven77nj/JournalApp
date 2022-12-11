import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../pages";


export const AuthRoutes = () => {
  return (
    <Routes>
      
      <Route path="login" element={ <LoginPage />} /> {/* Ruta de login */}
      <Route path="register" element={ <RegisterPage />} /> {/* Ruta de registro */}

      <Route path="/*" element={ <Navigate to="/auth/login" />} /> {/* Cualquier ruta */}
    </Routes>
  )
}
