import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { MyGlobalContext } from "./contexts/Global";
import { Light } from "./themes/Light";
import { Dark } from "./themes/Dark";
import BasicGridLayout from "./components/layout";

// Wrap the app with the ThemeProvider component
function App() {
  const [themeName, setThemeName] = useState<string>("dark");
  return (
    <MyGlobalContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={themeName === "Light" ? Light : Dark}>
      <BasicGridLayout></BasicGridLayout>

      </ThemeProvider>
    </MyGlobalContext.Provider>
  );
}



export default App;
