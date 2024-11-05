// Importing necessary components from Material UI and Next.js
import { Box, Typography, Link, Button } from "@mui/material";
import Image from "next/image";

// Home page component for the hero section with background image, text overlay, and icons
export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative", // Enables positioning for inner elements
        width: "100vw",       // Ensures full viewport width
        height: "100vh",      // Ensures full viewport height
        overflow: "hidden",   // Prevents overflow on small devices
        backgroundImage: "url('/homepage-hero-image.jpg')", // Sets background image
        backgroundSize: "cover",    // Scales image to cover entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents image repetition
        display: "flex",       // Flex container for inner content alignment
        flexDirection: "column", // Arranges inner elements vertically
        justifyContent: "flex-end", // Aligns content to the bottom
      }}
    >
      {/* Icons aligned to the top-right, starting 50px from the top */}
      <Box
        sx={{
          position: "absolute",   // Absolute positioning to place near the top-right
          top: 50,                // 50px from the top of the container
          right: 40,              // Positioned slightly away from the right margin
          display: "flex",        // Flex container for icons
          flexDirection: "column", // Stack icons vertically
          alignItems: "flex-end", // Align icons to the right
          gap: 2,                 // Spacing between icons
        }}
      >
        {/* Spotify */}
        <Link href="https://spotify.com" passHref target="_blank" rel="noopener noreferrer">
          <Image src="/spotify.svg" alt="Spotify" width={30} height={30} />
        </Link>
        {/* Apple Podcasts */}
        <Link href="https://www.apple.com/apple-podcasts/" passHref target="_blank" rel="noopener noreferrer">
          <Image src="/apple-podcasts.svg" alt="Apple Podcasts" width={30} height={30} />
        </Link>
        {/* Amazon Music */}
        <Link href="https://music.amazon.com" passHref target="_blank" rel="noopener noreferrer">
          <Image src="/amazon.png" alt="Amazon Music" width={30} height={30} />
        </Link>
        {/* YouTube Music */}
        <Link href="https://music.youtube.com" passHref target="_blank" rel="noopener noreferrer">
          <Image src="/youtube.svg" alt="YouTube Music" width={30} height={30} />
        </Link>
      </Box>

      {/* Semi-transparent blue gradient overlay for better text readability */}
      <Box
        sx={{
          width: "100%", // Full width of the container
          background: "linear-gradient(to top, rgba(17, 34, 85, 0.8), transparent)", // Blue gradient effect
          color: "white",   // White text for readability
          padding: 4,       // Padding inside the gradient box
          display: "flex",  // Flex container for inner text alignment
          flexDirection: "column", // Vertical arrangement of text
          alignItems: "flex-start", // Align text to the left
          textAlign: "left", // Ensures text aligns left
          pb: 10,            // Bottom padding for spacing
          pl: 4,             // Left padding for consistent spacing
        }}
      >
        {/* Main headline text */}
        <Typography variant="h5" paragraph sx={{ fontWeight: "bold", mb: 1 }}>
          A FEW MAD APPLES
        </Typography>

        {/* Subtitle text with a smaller margin for separation */}
        <Typography variant="h6" sx={{ mb: 3 }}>
          Uncovering how violence within law enforcement corrupts the entire system, debunking the "few bad apples" myth, and highlighting injustices in policing Black communities.
        </Typography>

        {/* 'Learn More' button styled in yellow, linking to the About page */}
        <Link href="/about" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fdd10a",  // Yellow background color for the button
              color: "#112255",            // Blue text color for contrast
              fontSize: "1rem",            // Font size for readability
              fontWeight: "bold",          // Bold text for emphasis
              padding: "10px 20px",        // Padding inside the button
              "&:hover": {
                backgroundColor: "#dcb609", // Darker yellow on hover
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
