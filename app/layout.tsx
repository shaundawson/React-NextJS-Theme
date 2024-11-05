"use client";

import { AppBar, Toolbar, Typography, Box, CssBaseline, IconButton, Container, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";
import { Apple, Favorite, MusicNote, Podcasts } from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add metadata, links, etc. here */}
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Link href="/" passHref>
                  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1 }}>
                    <Image
                      src="/logo.png" // Replace with the path to your logo
                      alt="A Few Mad Apples logo"
                      width={40} // Adjust width accordingly
                      height={40} // Adjust height to maintain aspect ratio
                    />
                    <Typography variant="h6" component="div">
                      A Few Mad Apples
                    </Typography>
                  </Box>
                </Link>
                <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
                  <IconButton color="inherit" href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                    <MusicNote />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer">
                    <Apple />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.audible.com/" target="_blank" rel="noopener noreferrer">
                    <Podcasts />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.iheart.com/" target="_blank" rel="noopener noreferrer">
                    <Favorite />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            <Container component="main" sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {children}
            </Container>
            <footer style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", backgroundColor: "#1e1e1e", color: "#ffffff", padding: 16 }}>
              <Link href="https://nextjs.org/learn">
                <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                  Learn
                </Button>
              </Link>
              <Link href="https://vercel.com/templates?framework=next.js">
                <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                  Examples
                </Button>
              </Link>
              <Link href="https://nextjs.org">
                <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
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
