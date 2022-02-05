import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core"
import Box from '@mui/material/Box';
import { withStyles } from "@material-ui/core/styles";

import PaginaMae from './components/Calculadora.jsx'

const WhiteTextTypographyTitulo = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: 48
  }
})(Typography);

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Box sx={{ bgcolor: "#111419", p: 2.5 }} >
          <WhiteTextTypographyTitulo variant="h3" gutterBottom component="div">
            Calculadora:
          </WhiteTextTypographyTitulo>
        </Box>
        <Box sx={{ bgcolor: "#16191F", p: 2.5 }} >
        
          <PaginaMae />
        </Box>
      </Container>
    );
  }
}

export default App;
