"use client"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../app/styles/globals";
import Menu from "./components/Menu";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Container } from "./style";
import { useState } from "react";

export default function Home() {

  const [theme, setTheme] = useState(light);

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle/>
        <Menu onChange={checked => {setTheme(checked ? dark : light)}}/>
        <h1>Home</h1>
      </Container>
      </ThemeProvider>
    </>
  );
}
