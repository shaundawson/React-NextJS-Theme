"use client";

// Importcomponents from Material UI and Next.js
import { AppBar, Toolbar, Typography, Box, CssBaseline, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

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
    primary: {
      main: "#112255", // Blue color for the navbar background
    },
    secondary: {
      main: "#fdd10a", // Yellow color for buttons and hover effects
    },
    background: {
      default: "#000000", // Black background for the page
      paper: "#000000",
    },
    text: {
      primary: "#ffffff", // White text color for navbar links
      secondary: "#fdd10a", // Yellow for specific elements
    },
  },
  typography: {
    fontFamily: "Bebas Neue, sans-serif", 
  },
});

// Root layout component wrapping the app with a theme and layout structure
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>A Few Mad Apples Podcast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline /> {/* Resets CSS for consistent styling */}
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Navigation bar */}
            <AppBar position="static" sx={{ backgroundColor: darkTheme.palette.primary.main, color: darkTheme.palette.text.primary }}>
              <Toolbar>
                <Link href="/" passHref>
                  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1, maxHeight: "30px" }}>
                    <Image
                      src="/logo.png" // Logo for branding
                      alt="A Few Mad Apples logo"
                      width={50}
                      height={50}
                      style={{ maxHeight: "100%", width: "auto", height: "auto" }}
                    />
                  </Box>
                </Link>

                {/* Navigation links */}
                <Box sx={{ display: "flex", gap: 3, marginLeft: "auto", alignItems: "center" }}>
                  {/* Links with icons and hover styles */}
                  {[
                    { label: "Home", icon: <HomeIcon />, href: "/" },
                    { label: "About", icon: <InfoIcon />, href: "/about" },
                    { label: "Episodes", icon: <HeadphonesIcon />, href: "#" },
                    { label: "Data", icon: <PieChartIcon />, href: "#" },
                    { label: "Resources", icon: <LibraryBooksIcon />, href: "/resources" },
                    { label: "Donate", icon: <VolunteerActivismIcon />, href: "#" },
                  ].map(({ label, icon, href }) => (
                    <Link key={label} href={href} passHref>
                      <Button
                        startIcon={icon} // Icon to the left of the text
                        sx={{
                          color: darkTheme.palette.text.primary, // White color for link text
                          "&:hover": {
                            color: darkTheme.palette.secondary.main, // Yellow on hover
                          },
                        }}
                      >
                        {label}
                      </Button>
                    </Link>
                  ))}

                  {/* 'Contact' link styled as a button with yellow background */}
                  <Link href="/contact" passHref>
                    <Button
                      startIcon={<MailIcon />}
                      variant="contained"
                      sx={{
                        backgroundColor: darkTheme.palette.secondary.main, // Yellow background color
                        color: darkTheme.palette.primary.main, // Blue text color
                        "&:hover": {
                          backgroundColor: "#dcb609", // Darker yellow on hover
                        },
                        fontWeight: "bold",
                      }}
                    >
                      Contact
                    </Button>
                  </Link>
                </Box>
              </Toolbar>
            </AppBar>

            {/* Main content area */}
            <Box component="main" sx={{ flexGrow: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}>
              {children}
            </Box>

            {/* Footer */}
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
