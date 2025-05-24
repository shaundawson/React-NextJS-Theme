"use client";

import { useState } from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import Link from "next/link";

// Helper to get hubspotutk cookie for tracking
function getCookie(name) {
  if (typeof document === "undefined") return "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return "";
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // HubSpot variables
  const portalId = "5688825";
  const formGuid = "15aae955-ffc1-41c3-88b9-5c2e1f5452a5";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    // Build context object, only add hutk if it exists
    const hutk = getCookie("hubspotutk");
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
    };
    if (hutk) {
      context.hutk = hutk;
    }

    const data = {
      fields: [
        {
          name: "email",
          value: email,
        },
      ],
      context,
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setError(
          errorData.message ||
          "There was a problem submitting the form. Please try again."
        );
      }
    } catch (err) {
      setError("There was a problem submitting the form. Please try again.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", width: "100vw", margin: 0, padding: 0 }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: 'auto', md: "60vh" },
          background: "linear-gradient(135deg, #0A1F44 0%, #112255 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          pt: { xs: 0, md: 0 }, // top padding for mobile
          pb: { xs: 5, md: 0 } //  bottom padding for mobile
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{
            maxWidth: "800px",
            pt: { xs: '80px', md: 0 },
            marginLeft: { xs: 'auto', md: 0 },
            marginRight: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: {
                  xs: '1.8rem', // Mobile font size
                  sm: '2rem',   // Small tablet
                  md: '3rem'    // Desktop
                },
                lineHeight: {
                  xs: '2rem',
                  md: '3.5rem'
                }
              }}
            >
              When policing tears families apart, who shields the children?
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '1rem',
                  md: "1.2rem"
                },
                mb: 3,
                lineHeight: {
                  xs: '1.5rem',
                  md: '1.8rem'
                }
              }}
            >
              <b>A Few Mad Apples </b> uncovers the systemic criminalization of Black parenthood and the intergenerational trauma it fuels—while following grassroots movements reimagining justice through community care.
            </Typography>

            {/* BUTTON GROUP */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <Link href="/about">
                {/* CTA Button 1 */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fdd10a",
                    color: "#112255",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '0.9rem', md: "1rem" },
                    "&:hover": {
                      backgroundColor: "#e5c009",
                    },
                  }}
                >
                  CTA 1
                </Button>
              </Link>

              {/* CTA Button 2 */}
              <Button
                variant="outlined"
                href="/epk.pdf"
                download
                sx={{
                  borderColor: "white",
                  color: "white",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.9rem', md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#fdd10a",
                    color: "#112255",
                    borderColor: "#fdd10a"
                  },
                }}
              >
                CTA 2
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* STAY INFORMED SECTION */}
      <Box sx={{
        backgroundColor: "#f8f9fa",
        py: { xs: 4, md: 6 },
        textAlign: "center",
      }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#112255",
              mb: 2,
              fontSize: {
                xs: '1.5rem',
                md: '2.125rem'
              }
            }}
          >
            Stay Informed
          </Typography>
          <Typography sx={{
            mb: 3,
            color: "#555",
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}>
            Sign up to be the first to hear about how to take action.
          </Typography>
          {submitted ? (
            <Typography sx={{ color: "#4e944f", fontWeight: "bold" }}>
              Thank you for subscribing!
            </Typography>
          ) : (
            <Box component="form" sx={{ maxWidth: 400, margin: '0 auto' }} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                size="small"
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#112255",
                  color: "#ffffff",
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Subscribe
              </Button>
              {error && (
                <Typography sx={{ color: "#d7263d", mt: 2 }}>
                  {error}
                </Typography>
              )}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
