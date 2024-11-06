"use client";

import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

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

export default function EpisodesPage() {
    useEffect(() => {
        // Use client-only calculations here
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ display: "grid", gridTemplateRows: "20px 1fr 20px", minHeight: "100vh", padding: 8, pb: 20, gap: 16 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            A Few Mad Apples - Episodes
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Podcast Episodes
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Explore our episodes where we uncover how violence within law enforcement corrupts the entire system, debunking the &quot;few bad apples&quot; myth, and highlighting injustices in policing Black communities.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                        <Link href="/resources" passHref>
                            <Button variant="outlined" color="secondary">
                                View Resources
                            </Button>
                        </Link>
                    </Box>
                </main>
                <footer style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="https://nextjs.org/learn" passHref>
                        <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                            Learn
                        </Button>
                    </Link>
                    <Link href="https://vercel.com/templates?framework=next.js" passHref>
                        <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                            Examples
                        </Button>
                    </Link>
                    <Link href="https://nextjs.org" passHref>
                        <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                            Go to nextjs.org →
                        </Button>
                    </Link>
                </footer>
            </Box>
        </ThemeProvider>
    );
}
