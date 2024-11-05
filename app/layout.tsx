"use client";

import { AppBar, Toolbar, Typography, Box, CssBaseline, IconButton, Container, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Apple, Favorite, MusicNote, Podcasts } from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#112255",
    },
    secondary: {
      main: "#fdd10a",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#fdd10a",
    },
  },
  typography: {
    fontFamily: "Bebas Neue, sans-serif",
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>A Few Mad Apples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: darkTheme.palette.primary.main }}>
              <Toolbar>
                <Link href="/" passHref>
                  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1, maxHeight: "50px" }}>
                    <Image
                      src="/logo.png"
                      alt="A Few Mad Apples logo"
                      width={150}
                      height={50}
                      style={{ maxHeight: "100%", width: "auto", height: "auto" }}
                    />
                  </Box>
                </Link>
                <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
                  <IconButton sx={{ color: darkTheme.palette.primary.main }} href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                    <MusicNote />
                  </IconButton>
                  <IconButton sx={{ color: darkTheme.palette.primary.main }} href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer">
                    <Apple />
                  </IconButton>
                  <IconButton sx={{ color: darkTheme.palette.primary.main }} href="https://www.audible.com/" target="_blank" rel="noopener noreferrer">
                    <Podcasts />
                  </IconButton>
                  <IconButton sx={{ color: darkTheme.palette.primary.main }} href="https://www.iheart.com/" target="_blank" rel="noopener noreferrer">
                    <Favorite />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            <Container component="main" sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {children}
            </Container>
            <footer style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", backgroundColor: darkTheme.palette.background.default, color: darkTheme.palette.text.primary, padding: 16, borderTop: `1px solid ${darkTheme.palette.text.primary}` }}>
              <Link href="https://nextjs.org/learn" passHref>
                <Button target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                  Learn
                </Button>
              </Link>
              <Link href="https://vercel.com/templates?framework=next.js" passHref>
                <Button target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                  Examples
                </Button>
              </Link>
              <Link href="https://nextjs.org" passHref>
                <Button target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                  Go to nextjs.org →
                </Button>
              </Link>
              <Typography variant="body2" align="center" sx={{ width: "100%", marginTop: 2 }}>
                © {new Date().getFullYear()} A Few Mad Apples. All Rights Reserved.
              </Typography>
            </footer>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
