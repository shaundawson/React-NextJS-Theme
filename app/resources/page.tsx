"use client";

// Import necessary components from Material UI and Next.js
import { Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import Link from "next/link";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Resources array with title, description, and link
const resources = [
    { title: "Police Brutality Data", description: "A comprehensive dataset on police violence in the United States.", link: "https://policeviolencereport.org" },
    { title: "The Sentencing Project", description: "Research and advocacy for reducing racial disparities in the criminal justice system.", link: "https://www.sentencingproject.org" },
    { title: "Campaign Zero", description: "Policy solutions to end police violence in America.", link: "https://www.joincampaignzero.org" },
    { title: "Equal Justice Initiative", description: "Information and reports on racial injustice and reform efforts.", link: "https://eji.org" },
];

export default function ResourcesPage() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#000000", // Black background
                color: "#ffffff",           // White text color
                paddingX: { xs: 2, sm: 4, md: 8 }, // Responsive padding
                paddingY: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Header section */}
            <Box sx={{ width: "100%", maxWidth: "1000px", mb: 6 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1, color: "#ffffff", textAlign: "left" }}>
                    Resources
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 3, color: "#fdd10a", textAlign: "left" }}>
                    Explore resources that delve deeper into topics from the podcast.
                </Typography>
            </Box>

            {/* Table of Resources */}
            <TableContainer component={Paper} sx={{ maxWidth: "1000px", backgroundColor: "#112255", borderRadius: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "#fdd10a", fontWeight: "bold", fontSize: "1rem" }}>Title</TableCell>
                            <TableCell sx={{ color: "#fdd10a", fontWeight: "bold", fontSize: "1rem" }}>Description</TableCell>
                            <TableCell sx={{ color: "#fdd10a", fontWeight: "bold", fontSize: "1rem" }}>Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resources.map((resource, index) => (
                            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell sx={{ color: "#ffffff", display: "flex", alignItems: "center", gap: 1 }}>
                                    <LibraryBooksIcon sx={{ color: "#fdd10a" }} />
                                    {resource.title}
                                </TableCell>
                                <TableCell sx={{ color: "#dddddd" }}>{resource.description}</TableCell>
                                <TableCell>
                                    <Link href={resource.link} passHref>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            endIcon={<ArrowForwardIcon />}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ textTransform: "none" }}
                                        >
                                            Visit
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
