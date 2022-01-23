import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import 'react-calendar/dist/Calendar.css';

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
                <NavBar />
                <AllRoutes />
            </ThemeProvider>
        </>
    )
 }

 export default App;