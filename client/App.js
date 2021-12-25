import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//COMPONENTS
import AllRoutes from './AllRoutes';
import NavBar from './Components/NavBar';

const theme = createTheme({
    typography: {
        fontFamily: 'Philosopher'
    }
});

 function App() {
     return (
         <>
             <ThemeProvider theme={theme}>
                <NavBar/>
                <AllRoutes />
                {/* FOOTER */}
             </ThemeProvider>
         </>
     )
 }

 export default App;