"use client";

import { Archivo } from "next/font/google";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

// Load Archivo font from Google Fonts
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Define theme colors and typography for the website
const theme = createTheme({
  palette: {
    primary: { main: "#112255" }, // Dark blue
    secondary: { main: "#fdd10a" }, // Yellow
    background: { default: "#112255", paper: "#ffffff" }, // Background colors
    text: { primary: "#ffffff", secondary: "#dddddd" }, // Text colors
  },
  typography: {
    fontFamily: archivo.style.fontFamily, // Apply Archivo font
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // State to control mobile menu (drawer)
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  // Navigation menu items
  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PODCAST", href: "/episodes" },
    { label: "BLOG", href: "/blog" },
    { label: "RESOURCES", href: "/resources" },
  ];

  return (
    <html lang="en">
      <head>
        <title>A Few Mad Apples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={archivo.className}
        style={{ margin: 0, padding: 0, overflowX: "hidden" }}
      >
        <ThemeProvider theme={theme}>
          {/* HEADER - Navigation Bar */}
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              background: "linear-gradient(to right, #0d1b4c, #112255)",
              borderBottom: "none",
            }}
          >
            <Container maxWidth="xl">
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: { xs: 64, md: 80 },
                  px: 0,
                }}
              >
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Link href="/" passHref>
                    <Image
                      src="/logo.png"
                      alt="A Few Mad Apples"
                      width={80}
                      height={80}
                    />
                  </Link>
                </Box>

                {/* Navigation links and buttons (right-aligned) */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: 2,
                    ml: "auto",
                  }}
                >
                  {/* Navigation Links */}
                  {menuItems.map(({ label, href }) => (
                    <Link key={label} href={href} passHref>
                      <Button
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: "1rem",
                          px: 2,
                        }}
                      >
                        {label}
                      </Button>
                    </Link>
                  ))}

                  {/* CTA Buttons */}
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fdd10a",
                      color: "#112255",
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 2,
                      boxShadow: "none",
                      ml: 2,
                      "&:hover": {
                        background: "#ffe066",
                        color: "#112255",
                      },
                    }}
                    href="/donate"
                  >
                    Donate
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 2,
                      ml: 1,
                      "&:hover": {
                        background: "#fdd10a",
                        borderColor: "#fdd10a",
                        color: "#112255",
                      },
                    }}
                    href="/take-action"
                  >
                    Take Action
                  </Button>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                  sx={{ display: { xs: "flex", md: "none" } }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>

          {/* MOBILE MENU - Drawer for small screens */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 280,
                backgroundColor: "#112255",
                color: "white",
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ color: "#fdd10a", alignSelf: "flex-end" }}
              >
                <CloseIcon />
              </IconButton>

              {/* Navigation Links */}
              <List>
                {menuItems.map(({ label, href }) => (
                  <Link key={label} href={href} passHref>
                    <ListItem button>
                      <Typography variant="h6" sx={{ color: "white" }}>
                        {label}
                      </Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>

              {/* Gold Action Buttons (Mobile) */}
              <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "#fdd10a",
                    color: "#112255",
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: 2,
                    boxShadow: "none",
                    "&:hover": {
                      background: "#ffe066",
                      color: "#112255",
                    },
                  }}
                  href="/donate"
                >
                  Donate
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: "#fdd10a",
                    color: "#fdd10a",
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": {
                      background: "#fdd10a22",
                      borderColor: "#ffe066",
                      color: "#112255",
                    },
                  }}
                  href="/take-action"
                >
                  Take Action
                </Button>
              </Box>
            </Box>
          </Drawer>

          {/* MAIN CONTENT */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100vw",
              minHeight: "100vh",
              overflowX: "hidden",
            }}
          >
            {children}
          </Box>

          {/* FOOTER */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #ddd",
              py: 6,
              mt: 0,
            }}
          >
            <Container maxWidth="xl">
              <Grid container spacing={3}>
                {/* LEFT COLUMN - Social Media & Streaming Icons */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <a href="#" target="_blank" aria-label="Spotify">
                      <img
                        src="https://blog.afewmadapples.com/hubfs/Social%20Media%20Icons/Spotify/Spotify_Primary_Logo_RGB_Green.png"
                        alt="Spotify"
                        style={{ height: 32, width: "auto" }}
                      />
                    </a>
                    <a href="#" target="_blank" aria-label="Apple Podcasts">
                      <img
                        src="https://blog.afewmadapples.com/hubfs/Social%20Media%20Icons/Apple/ApplePodcasts.png"
                        alt="Apple Podcasts"
                        style={{ height: 32, width: "auto" }}
                      />
                    </a>
                    <a href="#" target="_blank" aria-label="YouTube">
                      <img
                        src="https://blog.afewmadapples.com/hubfs/Social%20Media%20Icons/Youtube/Youtube_Music_icon.svg.png"
                        alt="YouTube"
                        style={{ height: 32, width: "auto" }}
                      />
                    </a>
                    <a href="#" target="_blank" aria-label="Amazon Music/Audible">
                      <img
                        src="https://blog.afewmadapples.com/hubfs/Social%20Media%20Icons/Amazon/icons8-audible-96.png"
                        alt="Amazon Music"
                        style={{ height: 32, width: "auto" }}
                      />
                    </a>
                  </Box>
                </Grid>

                {/* MIDDLE COLUMN - Copyright & Legal Links */}
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    © {new Date().getFullYear()} A Few Mad Apples
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      mt: 1,
                    }}
                  >
                    <Link
                      href="#"
                      sx={{
                        fontSize: "0.875rem",
                        color: "#333",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      User Agreement
                    </Link>
                    <Link
                      href="#"
                      sx={{
                        fontSize: "0.875rem",
                        color: "#333",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Privacy
                    </Link>
                    <Link
                      href="#"
                      sx={{
                        fontSize: "0.875rem",
                        color: "#333",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Your Data Choices
                    </Link>
                  </Box>
                </Grid>

                {/* RIGHT COLUMN - Quick Links */}
                <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 2,
                    }}
                  >
                    <Link
                      href="#"
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#"
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Donate
                    </Link>
                    <Link
                      href="#"
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Subscribe
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
