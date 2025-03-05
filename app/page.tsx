import { Box, Typography, Button, Card, CardContent, Container, Grid, Divider, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArticleIcon from "@mui/icons-material/Article";

export default async function HomePage() {
  // API details for fetching blog posts from HubSpot
  const TARGET_CONTENT_GROUP_ID = "166977595766";
  const HUBSPOT_API_URL = `https://api.hubapi.com/cms/v3/blogs/posts?contentGroupId=${TARGET_CONTENT_GROUP_ID}&state=PUBLISHED`;
  const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

  // Initialize empty arrays for blog posts and latest episodes
  let blogPosts = [];
  let latestEpisodes = []; // Placeholder for future API integration

  try {
    // Fetch blog posts from HubSpot API
    const response = await fetch(HUBSPOT_API_URL, {
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    // If the response fails, log the error
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch blog posts: ${errorText}`);
    }

    // Parse JSON response and sort posts by publish date (newest first)
    const data = await response.json();
    blogPosts = (data.results || []).sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
  }

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", width: "100vw", margin: 0, padding: 0 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          height: "450px",
          background: "linear-gradient(135deg, #0A1F44 0%, #112255 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "600px" }}>
            {/* Main heading */}
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Uncover the Truth Behind Policing in Black Communities
            </Typography>
            {/* Supporting text */}
            <Typography sx={{ fontSize: "1.2rem", mb: 3 }}>
              A Few Mad Apples exposes systemic injustice in law enforcement with investigative journalism and data analysis.
            </Typography>
            {/* Learn more button */}
            <Link href="/about" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fdd10a",
                  color: "#112255",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#e5c009",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* SPOTLIGHT SECTION */}
      <Box sx={{ backgroundColor: "#ffffff", py: 6 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <ArticleIcon sx={{ color: "#112255", mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#112255" }}>
              Spotlight
            </Typography>
            <Divider sx={{ flexGrow: 1, ml: 2, borderBottomWidth: 2, borderColor: "#112255" }} />
          </Box>

          {/* Display first 4 blog posts */}
          <Grid container spacing={4}>
            {blogPosts.slice(0, 4).map((post) => (
              <Grid item xs={12} md={3} key={post.id}>
                <Card sx={{ backgroundColor: "#ffffff", "&:hover": { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" } }}>
                  <Image src={post.featuredImage || "/placeholder.jpg"} alt={post.name} width={400} height={200} style={{ objectFit: "cover", width: "100%" }} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#112255", mb: 1 }}>
                      {post.name}
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555" }}>
                      {post.metaDescription || "No description available."}
                    </Typography>
                    <Link href={post.url} target="_blank" rel="noopener noreferrer" passHref>
                      <Button variant="outlined">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* LATEST EPISODES SECTION */}
      <Box sx={{ backgroundColor: "#ffffff", py: 6 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PlayCircleOutlineIcon sx={{ color: "#112255", mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#112255" }}>
              Latest Episodes
            </Typography>
            <Divider sx={{ flexGrow: 1, ml: 2, borderBottomWidth: 2, borderColor: "#112255" }} />
          </Box>

          {/* Placeholder for future API integration */}
          <Grid container spacing={4}>
            {latestEpisodes.map((episode, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ backgroundColor: "#ffffff", "&:hover": { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" } }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#112255", mb: 1 }}>
                      {episode.title}
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555" }}>
                      {episode.description || "No description available."}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STAY INFORMED SECTION (NEWSLETTER) */}
      <Box sx={{ backgroundColor: "#f8f9fa", py: 6, textAlign: "center", mt: 6 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#112255", mb: 2 }}>
            Stay Informed
          </Typography>
          <Typography sx={{ mb: 3, color: "#555" }}>
            Sign up to be the first to hear about how to take action.
          </Typography>

          <Box component="form">
            <TextField fullWidth label="Email Address" variant="outlined" size="small" sx={{ mb: 2 }} />
            <Button fullWidth variant="contained" sx={{ backgroundColor: "#112255", color: "#ffffff" }}>
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
