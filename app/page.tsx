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
        minHeight: "100vh", // Takes up the full viewport height
        textAlign: "center",
        padding: 4,
        overflow: "hidden",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to A Few Mad Apples
      </Typography>
      <Typography variant="body1" paragraph>
        Uncovering how violence within law enforcement corrupts the entire system, debunking the "few bad apples" myth, and highlighting injustices in policing Black communities.
      </Typography>
      <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
        <Link href="/episodes" passHref>
          <Button variant="contained" color="primary">
            Explore Episodes
          </Button>
        </Link>
        <Link href="/resources" passHref>
          <Button variant="outlined" color="secondary">
            View Resources
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
