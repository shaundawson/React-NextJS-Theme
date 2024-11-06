// Import necessary components from Material UI and Next.js
import { Box, Typography, Link, Button } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "100vh", md: "80vh", lg:"100vh", xl:"100vh" }, 
        overflow: "hidden",
        backgroundImage: "url('/homepage-hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Social Media Icons positioned based on screen size */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 50 },
          left: { xs: "50%", md: "auto" },
          right: { xs: "auto", md: 40 },
          transform: { xs: "translateX(-50%)", md: "none" },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: 2,
        }}
      >
        {[
          { href: "https://spotify.com", src: "/spotify.svg", alt: "Spotify" },
          { href: "https://www.apple.com/apple-podcasts/", src: "/apple-podcasts.svg", alt: "Apple Podcasts" },
          { href: "https://music.amazon.com", src: "/amazon.png", alt: "Amazon Music" },
          { href: "https://music.youtube.com", src: "/youtube.svg", alt: "YouTube Music" },
        ].map((icon) => (
          <Link href={icon.href} key={icon.alt} passHref target="_blank" rel="noopener noreferrer">
            <Image src={icon.src} alt={icon.alt} width={30} height={30} />
          </Link>
        ))}
      </Box>

      {/* Full-width Gradient Overlay with text and button */}
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(to top, rgba(17, 34, 85, 0.9), transparent 100%)", // Full gradient effect
          color: "white",
          py: { xs: 4, md: 8, lg:10, xl:10 },
          px: { xs: 2, md: 10, lg: 12,xl:14},
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
          }}
        >
          A FEW MAD APPLES
        </Typography>

        {/* Yellow Divider */}
        <Box sx={{ width: "80px", height: "4px", backgroundColor: "#fdd10a", mb: 2 }} />

        {/* Tagline in yellow */}
        <Typography
          variant="h3"
          sx={{
            fontStyle: "italic",
            mb: 3,
            color: "#fdd10a",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Uncovering systemic violence and injustice in policing Black communities.
        </Typography>

        {/* Description Paragraphs */}
        <Typography variant="body1" sx={{ mb: 3,fontSize: { xs: "0.9rem", md: "1.1rem", lg: "1.4rem" }, lineHeight: 1.6 }}>
          *A Few Mad Apples* takes listeners on a journey through the complex, often troubling history of Black communities and law enforcement in the United States. Through storytelling, we peel back the layers of systemic oppression and reveal untold stories.
        </Typography>

        {/* Support Button */}
        <Link href="/about" passHref>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#fdd10a",
              color: "#112255",
              fontSize: "1rem",
              fontWeight: "bold",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#dcb609",
              },
            }}
          >
            READ MORE →
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
