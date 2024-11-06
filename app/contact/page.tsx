"use client";

import { useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";

declare global {
    interface Window {
        hbspt: {
            forms: {
                create: (config: { portalId: string; formId: string; target: string }) => void;
            };
        };
    }
}

export default function ContactPage() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "5688825",
                    formId: "938ef126-fd9b-4bc2-a7c8-28dba7f42c7e",
                    target: "#hubspotForm"
                });
            }
        };
        document.body.appendChild(script);
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
            <Box sx={{ maxWidth: "600px", width: "100%", textAlign: "left", backgroundColor: "rgba(17, 34, 85, 0.9)", padding: 4, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Contact Us
                </Typography>
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />

                {/* Div where HubSpot form will be embedded */}
                <Box id="hubspotForm" sx={{ mt: 2 }} />
            </Box>
        </Box>
    );
}
