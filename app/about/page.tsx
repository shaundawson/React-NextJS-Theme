import { Container, Box, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";

export default function AboutPage() {
    return (
        <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", width: "100vw", margin: 0, padding: 0 }}>

            {/* HERO SECTION */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #0A1F44 0%, #112255 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ maxWidth: "750px" }}>
                        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, mt: 4 }}>
                            About A Few Mad Apples
                        </Typography>
                        <Typography variant="h6" sx={{ fontStyle: "italic", mb: 3, color: "#fdd10a" }}>
                            Uncovering systemic violence and injustice in policing Black communities.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                            A Few Mad Apples invites listeners on a journey through the complex, often troubling history of Black communities and law enforcement in the United States. With each episode, we peel back the layers of systemic oppression, bringing untold stories to light.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                            Through meticulous research and powerful storytelling, this podcast dismantles the myth of &quot;a few bad apples,&quot; exposing how unchecked power and systemic racism have fostered widespread injustices. But amid the hardships, we celebrate the resilience of Black communities, shining a light on stories of resistance and hope.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                            Combining historical analysis, contemporary insight, and calls to action, *A Few Mad Apples* challenges listeners to confront uncomfortable truths and inspires a path toward meaningful reform.
                        </Typography>

                        {/* Updated Button with `component="a"` */}
                        <Link href="https://patreon.com" passHref>
                            <Button
                                component="a"
                                variant="contained"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: "#fdd10a",
                                    color: "#112255",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    mb: 3,
                                    padding: "12px 24px",
                                    "&:hover": {
                                        backgroundColor: "#dcb609",
                                    },
                                }}
                            >
                                Support Us on Patreon →
                            </Button>
                        </Link>
                    </Box>
                </Container >
            </Box>
        </Box>
    );
}
