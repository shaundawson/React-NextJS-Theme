"use client";

// Import components from Material UI and Next.js
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  CssBaseline,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

// Icons for nav links
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PieChartIcon from "@mui/icons-material/PieChart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MailIcon from "@mui/icons-material/Mail";

// Define a theme with consistent colors and typography settings
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#112255" },
    secondary: { main: "#fdd10a" },
    background: { default: "#000000", paper: "#000000" },
    text: { primary: "#ffffff", secondary: "#fdd10a" },
  },
  typography: { fontFamily: "Bebas Neue, sans-serif" },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "About", icon: <InfoIcon />, href: "/about" },
    { label: "Episodes", icon: <HeadphonesIcon />, href: "#" },
    { label: "Data", icon: <PieChartIcon />, href: "#" },
    { label: "Resources", icon: <LibraryBooksIcon />, href: "/resources" },
    { label: "Donate", icon: <VolunteerActivismIcon />, href: "#" },
    { label: "Contact", icon: <MailIcon />, href: "/contact" },
  ];

  return (
    <html lang="en">
      <head>
        <title>A Few Mad Apples Podcast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Navigation bar */}
            <AppBar position="static" sx={{ backgroundColor: darkTheme.palette.primary.main }}>
              <Toolbar>
                <Link href="/" passHref>
                  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1, maxHeight: "30px" }}>
                    <Image
                      src="/logo.png"
                      alt="A Few Mad Apples logo"
                      width={50}
                      height={50}
                      style={{ maxHeight: "100%", width: "auto", height: "auto" }}
                    />
                  </Box>
                </Link>

                {/* Desktop Navigation Links */}
                <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
                  {menuItems.map(({ label, icon, href }) => (
                    <Link key={label} href={href} passHref>
                      <Button
                        startIcon={icon}
                        sx={{
                          color: "white",
                          "&:hover": { color: darkTheme.palette.secondary.main },
                        }}
                      >
                        {label}
                      </Button>
                    </Link>
                  ))}
                </Box>

                {/* Mobile Hamburger Menu */}
                <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
                  <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                </Box>

                {/* Drawer with Close Button and Transparent Gradient */}
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    sx: {
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 1))", // Transparent gradient
                      color: "#ffffff",
                      width: 280,
                      transition: "transform 0.4s ease-in-out",
                    },
                  }}
                >
                  {/* Close Button at the Top */}
                  <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <IconButton onClick={toggleDrawer(false)} aria-label="close" sx={{ color: "#fdd10a" }}>
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {/* Menu List */}
                  <List sx={{ paddingTop: 0 }}>
                    {menuItems.map(({ label, icon, href }, index) => (
                      <Link key={label} href={href} passHref>
                        <ListItem
                          component="a"
                          onClick={toggleDrawer(false)}
                          sx={{
                            color: "#ffffff",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
                            },
                          }}
                        >
                          {/* Yellow accent line on the left */}
                          <Box
                            sx={{
                              width: 4,
                              height: "100%",
                              backgroundColor: "#fdd10a",
                              mr: 1.5,
                            }}
                          />
                          <ListItemIcon sx={{ color: "#ffffff", minWidth: 40 }}>{icon}</ListItemIcon>
                          <ListItemText
                            primary={label}
                            primaryTypographyProps={{
                              fontSize: "1rem",
                              fontWeight: 400,
                              color: "#ffffff",
                            }}
                          />
                        </ListItem>
                        {index < menuItems.length - 1 && <Divider sx={{ bgcolor: "#444" }} />}
                      </Link>
                    ))}
                  </List>
                </Drawer>
              </Toolbar>
            </AppBar>

            {/* Main content area */}
            <Box component="main" sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: 0 }}>
              {children}
            </Box>

            {/* Footer */}
            <Box
              component="footer"
              sx={{
                backgroundColor: "#112255",
                color: "white",
                py: 6,
                px: { xs: 2, md: 10 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Grid container spacing={4}>
                {/* Column 1: Podcast Info */}
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textDecoration: "underline",
                      textDecorationColor: "#fdd10a",
                      textDecorationThickness: "4px",
                    }}
                  >
                    A FEW MAD APPLES
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Uncovering how violence within law enforcement corrupts the entire system, debunking the &quot;few bad apples&quot; myth, and highlighting injustices in policing Black communities.
                  </Typography>

                  <Link href="/about" passHref>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fdd10a",
                        color: "#112255",
                        fontWeight: "bold",
                        padding: "8px 16px",
                        "&:hover": { backgroundColor: "#dcb609" },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>

                {/* Column 2: Quick Links */}
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Quick Links
                  </Typography>
                  <Link href="/" sx={{ display: "block", color: "white", mb: 1 }}>Home</Link>
                  <Link href="/about" sx={{ display: "block", color: "white", mb: 1 }}>About</Link>
                  <Link href="/episodes" sx={{ display: "block", color: "white", mb: 1 }}>Episodes</Link>
                  <Link href="/resources" sx={{ display: "block", color: "white", mb: 1 }}>Resources</Link>
                  <Link href="/contact" sx={{ display: "block", color: "white" }}>Contact</Link>
                </Grid>

                {/* Column 3: Follow Us */}
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Follow Us
                  </Typography>
                  <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: "white", mb: 1 }}>
                    Spotify
                  </Link>
                  <Link href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: "white", mb: 1 }}>
                    Apple Podcasts
                  </Link>
                  <Link href="https://music.amazon.com" target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: "white", mb: 1 }}>
                    Amazon Music
                  </Link>
                  <Link href="https://music.youtube.com" target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: "white" }}>
                    YouTube Music
                  </Link>
                </Grid>

                {/* Column 4: Contact */}
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Contact
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Email: <Link href="mailto:sdaws016@fiu.edu" sx={{ color: "white" }}>sdaws016@fiu.edu</Link></Typography>
                  <Typography variant="body2">Phone: <Link href="tel:+13473009098" sx={{ color: "white" }}>(347) 300-9098</Link></Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
