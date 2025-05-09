import { Box, Typography, Button, Card, CardContent, Container, Grid, Divider, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArticleIcon from "@mui/icons-material/Article";
import RSSParser from "rss-parser";

// Type for RSS items
type RSSItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  content?: string;
  guid?: string;
};

export default async function HomePage() {
  const RSS_FEED_URL = "https://blog.afewmadapples.com/rss.xml";

  let blogPosts: RSSItem[] = [];
  let latestEpisodes: any[] = []; // placeholder for future episodes

  try {
    const parser: RSSParser = new RSSParser();
    const feed = await parser.parseURL(RSS_FEED_URL);
    blogPosts = feed.items.slice(0, 4);
  } catch (error) {
    console.error("❌ Error fetching RSS feed:", error);
  }

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
          <Box sx={{ maxWidth: "800px" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              When a system confuses badges with shields, who pays the price?
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", mb: 3 }}>
              A Few Mad Apples uncovers a century-old reckoning: Black neighborhoods fighting not just for justice, but for their right to breathe. Through the lens of a Black filmmaker, the series asks—what happens when the guardians become the danger, and the community becomes the cure?”

            </Typography>
            <Link href="/about">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fdd10a",
                  color: "#112255",
                  fontWeight: "bold",
                  mb: 3,
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

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={3} key={post.guid || index}>
                <Card sx={{ backgroundColor: "#ffffff", "&:hover": { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" } }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#112255", mb: 1 }}>
                      {post.title}
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555" }}>
                      {post.contentSnippet || "No description available."}
                    </Typography>
                    <Link href={post.link} target="_blank">
                      <Button variant="outlined">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STAY INFORMED SECTION */}
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
