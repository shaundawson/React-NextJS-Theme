"use client";

import { Box, Typography, Button, Link } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: 4,
        overflow: "hidden",
        backgroundImage: "linear-gradient(rgba(17, 34, 85, 0.7), rgba(17, 34, 85, 0.7)), url('/homepage-hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom color="white">
        Welcome to A Few Mad Apples
      </Typography>
      <Typography variant="body1" paragraph color="white">
        Uncovering how violence within law enforcement corrupts the entire system, debunking the "few bad apples" myth, and highlighting injustices in policing Black communities.
      </Typography>
      <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
        <Link href="/episodes">
          <Button variant="contained" color="primary">
            Explore Episodes
          </Button>
        </Link>
        <Link href="/resources">
          <Button variant="outlined" color="secondary">
            View Resources
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
