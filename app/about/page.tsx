import { Box, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";

export default function AboutPage() {
    return (
        // Full-page container with black background and white text
        <Box
            sx={{
                width: "100vw",              // Full viewport width
                backgroundColor: "#000000",   // Black background color
                color: "#ffffff",             // White text color
                padding: 4,                   // Padding around the content
                display: "flex",              // Flex container for centering
                alignItems: "center",         // Center vertically
                justifyContent: "center",     // Center horizontally
            }}
        >
            {/* Inner container to hold content with a max width and left alignment */}
            <Box sx={{ maxWidth: "800px", textAlign: "left" }}>

                {/* Headline for the About page */}
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
                    About A Few Mad Apples
                </Typography>

                {/* Yellow divider line under headline for visual separation */}
                <Divider sx={{ borderColor: "#fdd10a", width: "100px", mb: 3 }} />

                {/* Short tagline in italicized, yellow text */}
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 3, color: "#fdd10a" }}>
                    Uncovering systemic violence and injustice in policing Black communities.
                </Typography>

                {/* Main descriptive paragraphs for the About content */}
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                    *A Few Mad Apples* invites listeners on a journey through the complex, often troubling history of Black communities and law enforcement in the United States. With each episode, we peel back the layers of systemic oppression, bringing untold stories to light.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                    Through meticulous research and powerful storytelling, this podcast dismantles the myth of "a few bad apples," exposing how unchecked power and systemic racism have fostered widespread injustices. But amid the hardships, we celebrate the resilience of Black communities, shining a light on stories of resistance and hope.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    Combining historical analysis, contemporary insight, and calls to action, *A Few Mad Apples* challenges listeners to confront uncomfortable truths and inspires a path toward meaningful reform.
                </Typography>

                {/* Button linking to Patreon for support, styled in yellow with a hover effect */}
                <Link href="https://patreon.com" passHref>
                    <Button
                        variant="contained"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: "#fdd10a",   // Yellow background color
                            color: "#112255",             // Blue text color
                            fontSize: "1rem",             // Font size for readability
                            fontWeight: "bold",           // Bold text for emphasis
                            padding: "12px 24px",         // Padding around button text
                            "&:hover": {
                                backgroundColor: "#dcb609", // Darker yellow on hover
                            },
                        }}
                    >
                        Support Us on Patreon →
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
