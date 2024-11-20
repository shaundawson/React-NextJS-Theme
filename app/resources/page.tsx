"use client";
import {
    Box,
    Typography,
    Divider,
    Card,
    CardContent,
    Grid,
    IconButton,
    Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";

export default function ResourcesPage() {
    const [resources, setResources] = useState(null);

    useEffect(() => {
        const loadResources = async () => {
            try {
                const response = await fetch("/api/resources");
                const fetchedResources = await response.json();
                setResources(fetchedResources);
            } catch (error) {
                console.error("Failed to fetch resources:", error);
            }
        };
        loadResources();
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#112255",
                color: "#ffffff",
                px: { xs: 2, sm: 4, md: 8 },
                py: 4,
            }}
        >
            {/* Header Section */}
            <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", mb: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, color: "#ffffff" }}>
                    Resources
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />
                <Typography variant="h6" sx={{ fontStyle: "italic", color: "#fdd10a" }}>
                    Explore resources grouped by subject to gain deeper insights.
                </Typography>
            </Box>

            {/* Navigation Bar */}
            {resources && (
                <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: "#ffffff" }}>
                        Jump to a Category:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                        {Object.keys(resources).map((category) => (
                            <Button
                                key={category}
                                onClick={() =>
                                    document
                                        .getElementById(category.replace(/\s+/g, "-"))
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                variant="contained"
                                sx={{
                                    backgroundColor: "#fdd10a",
                                    color: "#112255",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#e5c309",
                                    },
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}

            {/* Resources Section */}
            {resources ? (
                Object.keys(resources).map((category) => (
                    <Box
                        key={category}
                        id={category.replace(/\s+/g, "-")}
                        sx={{ width: "100%", maxWidth: "1200px", mx: "auto", mb: 5 }}
                    >
                        <Typography variant="h5" sx={{ mb: 2, color: "#ffffff", fontWeight: "bold" }}>
                            {category}
                        </Typography>
                        <Grid container spacing={3}>
                            {resources[category].map((resource, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "#1e1e1e",
                                            color: "#ffffff",
                                            boxShadow: 3,
                                            borderRadius: 2,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#fdd10a",
                                                    mb: 1,
                                                }}
                                            >
                                                {resource.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 1 }}>
                                                <strong>Author(s):</strong> {resource.authors}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 1 }}>
                                                <strong>Year:</strong> {resource.year}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 1 }}>
                                                <strong>Format:</strong> {resource.format}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 2 }}>
                                                {resource.description}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography
                                                    component="a"
                                                    href={resource.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: "#fdd10a",
                                                        textDecoration: "underline", // Adds underline to signify link
                                                        cursor: "pointer", // Changes cursor to pointer on hover
                                                        "&:hover": {
                                                            color: "#dcb609", // Slightly darker yellow on hover
                                                        },
                                                    }}
                                                >
                                                    Learn More
                                                </Typography>
                                            </Box>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))
            ) : (
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6">Loading resources...</Typography>
                </Box>
            )}
        </Box>
    );
}
