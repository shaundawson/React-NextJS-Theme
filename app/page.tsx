import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const TARGET_CONTENT_GROUP_ID = "166977595766"; // Your Content Group ID
  const HUBSPOT_API_URL = `https://api.hubapi.com/cms/v3/blogs/posts?contentGroupId=${TARGET_CONTENT_GROUP_ID}`;
  const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

  let blogPosts = [];

  try {
    const response = await fetch(HUBSPOT_API_URL, {
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch blog posts: ${errorText}`);
    }

    const data = await response.json();
    console.log("🔍 Fetched Blog Posts:", JSON.stringify(data, null, 2));

    // ✅ Store the blog posts
    blogPosts = data.results || [];
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
  }

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
        Latest Blog Posts
      </Typography>

      {blogPosts.length === 0 ? (
        <Typography>No blog posts available.</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {blogPosts.map((post) => (
            <Card key={post.id} sx={{ width: { xs: "100%", md: "45%" }, p: 2 }}>
              <Image
                src={post.featuredImage || "/placeholder.jpg"}
                alt={post.name}
                width={400}
                height={250}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{post.name}</Typography>
                <Typography sx={{ mb: 2 }}>{post.metaDescription || "No description available."}</Typography>

                <Link href={post.url} target="_blank" rel="noopener noreferrer" passHref>
                  <Button
                    component="a"
                    variant="contained"
                    sx={{ backgroundColor: "#112255", color: "#fdd10a" }}
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

