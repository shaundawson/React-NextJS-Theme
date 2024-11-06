import { Box, Typography, Link, Button } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "100vh", md: "80vh" }, // Responsive height for smaller screens
        overflow: "hidden",
        backgroundImage: "url('/homepage-hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        px: { xs: 2, md: 10 }, // Responsive padding for horizontal spacing
      }}
    >
      {/* Social Media Icons, Responsive Positioning */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 50 }, // Adjusted for smaller screens
          right: { xs: 10, md: 40 },
          display: "flex",
          flexDirection: { xs: "row", md: "column" }, // Stack vertically on larger screens
          gap: 2,
        }}
      >
        {[
          { href: "https://spotify.com", src: "/spotify.svg", alt: "Spotify" },
          { href: "https://www.apple.com/apple-podcasts/", src: "/apple-podcasts.svg", alt: "Apple Podcasts" },
          { href: "https://music.amazon.com", src: "/amazon.png", alt: "Amazon Music" },
          { href: "https://music.youtube.com", src: "/youtube.svg", alt: "YouTube Music" },
        ].map((icon) => (
          <Link
            href={icon.href}
            key={icon.alt}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }} // Ensures icon alignment
          >
            <Image src={icon.src} alt={icon.alt} width={30} height={30} />
          </Link>
        ))}
      </Box>

      {/* Text Overlay with Gradient */}
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(to top, rgba(17, 34, 85, 0.9), transparent)",
          color: "white",
          py: { xs: 4, md: 10 }, // Responsive vertical padding
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Headline with Yellow Underline */}
        <Typography
          variant="h3"
          paragraph
          sx={{
            fontWeight: "bold",
            mb: 2,
            textDecoration: "underline",
            textDecorationColor: "#fdd10a",
            textDecorationThickness: "4px",
          }}
        >
          A FEW MAD APPLES
        </Typography>

        {/* Subtitle Text */}
        <Typography variant="h4" sx={{ mb: 3 }}>
          Uncovering how violence within law enforcement corrupts the entire system, debunking the &quot;few bad apples&quot; myth, and highlighting injustices in policing Black communities.
        </Typography>

        {/* Learn More Button */}
        {/* Learn More Button */}
        {/* Learn More Button */}
        <Link href="/about">
          <Button
            component="a" // Ensures the button is treated as an anchor link
            variant="contained"
            sx={{
              backgroundColor: "#fdd10a",       // Yellow button background
              color: "#112255",                 // Blue text color for contrast
              fontWeight: "bold",
              padding: "12px 24px",
              "&:hover": {
                backgroundColor: "#dcb609",     // Darker yellow on hover
              },
            }}
          >
            Learn More →
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
