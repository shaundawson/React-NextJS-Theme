"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Divider, CircularProgress } from "@mui/material";

export default function ContactPage() {
    const [formLoaded, setFormLoaded] = useState(false);

    useEffect(() => {
        const loadFormFromApi = async () => {
            try {
                const response = await fetch("/api/hubspot");
                const { portalId, formId } = await response.json();

                const script = document.createElement("script");
                script.src = "//js.hsforms.net/forms/embed/v2.js";
                script.async = true;
                script.onload = () => {
                    if (window.hbspt) {
                        window.hbspt.forms.create({
                            portalId,
                            formId,
                            target: "#hubspotForm",
                        });
                        setFormLoaded(true); // Mark the form as loaded
                    }
                };
                document.body.appendChild(script);
            } catch (error) {
                console.error("Failed to load HubSpot form:", error);
            }
        };

        loadFormFromApi();
    }, []);

    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "100vh",
                backgroundImage: "url('/contact-hero-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "600px",
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: "rgba(17, 34, 85, 0.9)",
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Contact Us
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />

                {/* Placeholder while form loads */}
                {!formLoaded && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100px",
                        }}
                    >
                        <CircularProgress sx={{ color: "#fdd10a" }} />
                    </Box>
                )}

                {/* Div where HubSpot form will be embedded */}
                <Box id="hubspotForm" sx={{ mt: 2 }} />
            </Box>
        </Box>
    );
}
