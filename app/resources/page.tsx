"use client";

// Import components from Material UI and Next.js
import { Box, Typography, Divider, Card, CardContent, CardActions, Button } from "@mui/material";
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
                backgroundColor: "#000000",
                color: "#ffffff",
                px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                py: 4,
            }}
        >
            {/* Header section */}
            <Box sx={{ width: "100%", maxWidth: "1600px", mb: 5, mx: "auto" }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1, color: "#ffffff", textAlign: "left" }}>
                    Resources
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 0, color: "#fdd10a", textAlign: "left" }}>
                    Explore resources that delve deeper into topics from the podcast.
                </Typography>
            </Box>

            {/* Card-based grid for resources */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",       // 1 column on extra-small screens
                        sm: "1fr 1fr",   // 2 columns on small screens
                        md: "1fr 1fr 1fr", // 3 columns on medium screens
                        lg: "1fr 1fr 1fr 1fr", // 4 columns on large and extra-large screens
                    },
                    gap: 4,
                    width: "100%",
                    maxWidth: "1600px",
                    mx: "auto", // Centers the grid within the screen width
                }}
            >
                {resources.map((resource, index) => (
                    <Card key={index} sx={{ backgroundColor: "#112255", color: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
                        <CardContent>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                                <LibraryBooksIcon sx={{ color: "#fdd10a" }} />
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                                    {resource.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: "#dddddd", mb: 2 }}>
                                {resource.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={resource.link} passHref>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    endIcon={<ArrowForwardIcon />}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "0.875rem",
                                        padding: "6px 12px",
                                        color: "#fdd10a",
                                        borderColor: "#fdd10a",
                                        "&:hover": {
                                            backgroundColor: "rgba(253, 209, 10, 0.1)",
                                            borderColor: "#fdd10a",
                                        },
                                    }}
                                >
                                    Visit
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
