import React from "react";
import { Element } from "react-scroll";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createTheme,
} from "@material-ui/core/styles";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@material-ui/icons";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather", "Lato"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
  palette: {
    primary: {
      main: "#4dabda",
    },
    navbar: {
      main: "#12232E",
    },
    background: {
      main: "#12232E",
    },
    title: {
      main: "#eefbfb",
    },
    button: {
      main: "#203647",
      light: "#4DA8DA",
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Navbar />
        <Element id="home">
          <Home />
        </Element>
        <Element id="about">
          <About />
        </Element>
        <Element id="skills">
          <Skills />
        </Element>
        <Element id="contact">
          <Contact />
        </Element>
        <ScrollTop>
          <Fab
            size="medium"
            aria-label="scroll back to top"
            sx={{ backgroundColor: "#eefbfb", color: "#007fcc" }}
          >
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
