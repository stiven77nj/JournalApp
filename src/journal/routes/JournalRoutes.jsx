import { Navigate, Route, Routes } from "react-router-dom";

import { JournalPage } from "../pages/JournalPage";


export const JournalRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={ <JournalPage />} /> {/* Ruta de journal */}

      <Route path="/*" element={ <Navigate to="/" />} /> {/* Cualquier otra ruta */}
     
    </Routes>
  )
}