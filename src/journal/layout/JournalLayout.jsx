import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { NavBar, SideBar } from "../components";


// Tamanio de la barra lateral
const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }} >

      {/* Navbar */}
      <NavBar drawerWidth={ drawerWidth } />

      {/* Sidebar */}
      <SideBar drawerWidth={ drawerWidth } />

      <Box 
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* toolbar */}
        <Toolbar />

        { children }

      </Box>

    </Box>
  )
}
