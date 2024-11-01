import Hero from "./components/hero/Hero";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./components/main/main";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bgWebsite.main}>
          <Hero />
          <Main />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
