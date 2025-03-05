"use client";

import { Archivo } from "next/font/google";
import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, Typography, Grid, Link } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Episodes", href: "/episodes" },
    { label: "Data", href: "/data" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <html lang="en">
      <head>
        <title>A Few Mad Apples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={archivo.className} style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <ThemeProvider theme={theme}>

          {/* HEADER - Navigation Bar */}
          <AppBar position="sticky" elevation={0} sx={{ background: "linear-gradient(to right, #0d1b4c, #112255)", borderBottom: "none" }}>
            <Container maxWidth="xl">
              <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Link href="/" passHref>
                    <Image src="/logo.png" alt="A Few Mad Apples" width={80} height={80} />
                  </Link>
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                  {menuItems.map(({ label, href }) => (
                    <Link key={label} href={href} passHref>
                      <Button sx={{ color: "white", fontWeight: 600, textTransform: "none" }}>{label}</Button>
                    </Link>
                  ))}
                </Box>

                {/* Donate Button */}
                <Link href="#" passHref>
                  <Button sx={{ backgroundColor: "#fdd10a", color: "#112255", fontWeight: 600 }}>Donate Now</Button>
                </Link>

                {/* Mobile Menu Button */}
                <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={toggleDrawer(true)}>
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>

              </Toolbar>
            </Container>
          </AppBar>

          {/* MOBILE MENU - Drawer for small screens */}
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 280, backgroundColor: "#112255", color: "white", p: 2 }}>
              {/* Close Button */}
              <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fdd10a" }}>
                <CloseIcon />
              </IconButton>

              {/* Navigation Links */}
              <List>
                {menuItems.map(({ label, href }) => (
                  <Link key={label} href={href} passHref>
                    <ListItem button>
                      <Typography variant="h6" sx={{ color: "white" }}>{label}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>

          {/* MAIN CONTENT */}
          <Box component="main" sx={{ flexGrow: 1, width: "100vw", minHeight: "100vh", overflowX: "hidden" }}>
            {children}
          </Box>

          {/* FOOTER */}
          <Box sx={{ backgroundColor: "#ffffff", borderTop: "1px solid #ddd", py: 6, mt: 0 }}>
            <Container maxWidth="xl">
              <Grid container spacing={3}>

                {/* LEFT COLUMN - Social Media & Streaming Icons */}
                <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <IconButton href="#" target="_blank"><FacebookIcon sx={{ color: "#1877F2" }} /></IconButton>
                    <IconButton href="#" target="_blank"><TwitterIcon sx={{ color: "#000000" }} /></IconButton>
                    <IconButton href="#" target="_blank"><YouTubeIcon sx={{ color: "#FF0000" }} /></IconButton>
                    <IconButton href="#" target="_blank"><InstagramIcon sx={{ color: "#E1306C" }} /></IconButton>
                    <IconButton href="#" target="_blank"><TikTokIcon sx={{ color: "#000000" }} /></IconButton>
                  </Box>
                </Grid>

                {/* MIDDLE COLUMN - Copyright & Legal Links */}
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    © {new Date().getFullYear()} A Few Mad Apples
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
                    <Link href="#" sx={{ fontSize: "0.875rem", color: "#333", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>User Agreement</Link>
                    <Link href="#" sx={{ fontSize: "0.875rem", color: "#333", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Privacy</Link>
                    <Link href="#" sx={{ fontSize: "0.875rem", color: "#333", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Your Data Choices</Link>
                    <Link href="#" sx={{ fontSize: "0.875rem", color: "#333", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Accessibility</Link>
                  </Box>
                </Grid>

                {/* RIGHT COLUMN - Quick Links */}
                <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                    <Link href="#" sx={{ fontWeight: "bold", color: "#000", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Contact Us</Link>
                    <Link href="#" sx={{ fontWeight: "bold", color: "#000", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Donate</Link>
                    <Link href="#" sx={{ fontWeight: "bold", color: "#000", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Subscribe</Link>
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
