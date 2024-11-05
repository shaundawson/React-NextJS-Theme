import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Link from "next/link";

export default function ContactPage() {
    return (
        // Full-page container with background image and centered content
        <Box
            sx={{
                width: "100vw",              // Full viewport width
                minHeight: "100vh",           // Full viewport height
                backgroundImage: "url('/contact-hero-image.jpg')",  // Set background image
                backgroundSize: "cover",      // Make image cover entire area
                backgroundPosition: "bottom", // Center the image
                color: "#ffffff",             // White text color for contrast
                padding: 4,                   // Padding around the content
                display: "flex",              // Flex container for centering
                alignItems: "center",         // Center vertically
                justifyContent: "center",     // Center horizontally
            }}
        >
            {/* Inner container with max width and left alignment for content */}
            <Box sx={{ maxWidth: "800px", width: "100%", textAlign: "left", backgroundColor: "rgba(17, 34, 85, 0.9)", padding: 4, borderRadius: 2 }}>

                {/* Page headline */}
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Contact Us
                </Typography>

                {/* Yellow divider line under headline for separation */}
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />

                {/* Form fields */}
                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "#000000",       // Black background for input
                            borderRadius: 1,                 // Rounded corners
                        }}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "#000000",       // Black background for input
                            borderRadius: 1,                 // Rounded corners
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "#000000",       // Black background for input
                            borderRadius: 1,                 // Rounded corners
                        }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{
                            backgroundColor: "#000000",       // Black background for input
                            borderRadius: 1,                 // Rounded corners
                        }}
                    />

                    {/* Submit button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fdd10a",       // Yellow button background
                            color: "#112255",                 // Blue text color for contrast
                            fontWeight: "bold",
                            padding: "12px 24px",
                            "&:hover": {
                                backgroundColor: "#dcb609",   // Darker yellow on hover
                            },
                        }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
