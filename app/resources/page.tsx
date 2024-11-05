"use client";

// Import components and styles from Material UI and Next.js
import { Box, Typography, Button, Divider, Card, CardContent, CardActions, Grid } from "@mui/material";
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
                backgroundColor: "#000000", // Black background color
                color: "#ffffff",           // White text color
                paddingX: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
                paddingY: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Header section, aligned to the left */}
            <Box sx={{ width: "100%", maxWidth: "1400px", mb: 6 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1, color: "#ffffff", textAlign: "left" }}>
                    Resources
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 1, color: "#fdd10a", textAlign: "left" }}>
                    Explore resources that delve deeper into topics from the podcast.
                </Typography>
            </Box>

            {/* Responsive Resource Cards in a Grid layout */}
            <Grid container spacing={4} justifyContent="center">
                {resources.map((resource, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}> {/* Responsive columns */}
                        <Card
                            sx={{
                                backgroundColor: "#112255",
                                borderRadius: 2,
                                boxShadow: 3,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <LibraryBooksIcon sx={{ color: "#fdd10a", mr: 1 }} />
                                    <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                                        {resource.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ color: "#dddddd" }}>
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
                                            marginLeft: "auto", // Align button to the right
                                            textTransform: "none", // Disable uppercase text
                                        }}
                                    >
                                        Visit
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
