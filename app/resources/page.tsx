"use client";

import { AppBar, Toolbar, Typography, Button, Box, CssBaseline, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Link from "next/link";
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

const resources = [
    { title: "Police Brutality Data", description: "A comprehensive dataset on police violence in the United States.", link: "https://policeviolencereport.org" },
    { title: "The Sentencing Project", description: "Research and advocacy for reducing racial disparities in the criminal justice system.", link: "https://www.sentencingproject.org" },
    { title: "Campaign Zero", description: "Policy solutions to end police violence in America.", link: "https://www.joincampaignzero.org" },
    { title: "Equal Justice Initiative", description: "Information and reports on racial injustice and reform efforts.", link: "https://eji.org" },
];

export default function ResourcesPage() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ display: "grid", gridTemplateRows: "20px 1fr 20px", minHeight: "100vh", padding: 8, pb: 20, gap: 16 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            A Few Mad Apples - Resources
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Resources
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Here are some resources that provide more information on topics discussed in the podcast.
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxWidth: "80%", backgroundColor: "#1e1e1e" }}>
                        <Table aria-label="resources table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ color: "#ffffff" }}>Title</TableCell>
                                    <TableCell sx={{ color: "#ffffff" }}>Description</TableCell>
                                    <TableCell sx={{ color: "#ffffff" }}>Link</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resources.map((resource, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ color: "#aaaaaa" }}>{resource.title}</TableCell>
                                        <TableCell sx={{ color: "#aaaaaa" }}>{resource.description}</TableCell>
                                        <TableCell>
                                            <Link href={resource.link} passHref>
                                                <Button component="a" target="_blank" rel="noopener noreferrer" variant="text" color="secondary">
                                                    Visit
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
                <footer style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/episodes" passHref>
                        <Button variant="outlined" color="secondary">
                            Back to Episodes
                        </Button>
                    </Link>
                </footer>
            </Box>
        </ThemeProvider>
    );
}
