import React from "react";
import { Box, Stack, Typography, styled, Input } from "@mui/joy";
import banner2 from "../assets/banner2.png";
import DLP from "../assets/DLP.png";
import WDW from "../assets/WDW.png";
import DL from "../assets/DL.png";
import PAW from "../assets/PAW.png";

const HoverImage = styled("img")({
  width: "90%",
  height: "100%",
  objectFit: "fill",
  filter: "grayscale(100%)",
  transition: "filter 0.5s ease",
  "&:hover": {
    filter: "none",
  },
});

export const ThemeParks = () => {
  const images = [
    { src: banner2, alt: "banner2" },
    { src: DLP, alt: "DLP", link: "https://www.disneylandparis.com" },
    { src: WDW, alt: "WDW", link: "https://www.disneyworld.disney.go.com" },
    { src: DL, alt: "DL", link: "https://disneyland.disney.go.com" },
    { src: PAW, alt: "PAW", link: "https://www.portaventuraworld.com" },
  ];

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack>
        <Stack
          sx={{
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ width: "100%", height: { xs: "auto" }, position: "relative" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                filter: "contrast(0.9)",
              }}
            />
            <Typography
              level="h1"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                fontFamily: "Jacques Francois, sans-serif",
                fontSize: "65px",
              }}
            >
              Theme Parks
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{alignItems:"flex-end", my:2}}>
        <Input sx={{width:"180px", mr:"20px", borderRadius:"20px", border:"2px solid #8A00F7"}} placeholder="Search Theme Park" />
        </Stack>
        {/* Disneyland Paris */}
        <Stack
          sx={{
            width: "100%",
            flexDirection: { xs: "row", lg: "row" },
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr",
            my: 5,
          }}
        >
          <Stack sx={{ width: "50%", justifyContent: "center" }}>
            <Typography
              level="h2"
              sx={{
                textAlign: "center",
                fontFamily: "Jacques Francois, sans-serif",
                fontSize: "35px",
              }}
            >
              Disneyland Paris
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              width: "50%",
              height: { xs: "auto" },
              alignItems: "end",
            }}
          >
            <a
              href={images[1].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents", width: "100%", height: "100%" }}
            >
              <HoverImage src={images[1].src} alt={images[1].alt} />
            </a>
          </Stack>
        </Stack>
        {/* Disney World */}
        <Stack
          sx={{
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr",
            my: 5,
          }}
        >
          <Stack sx={{ width: "50%", justifyContent: "center" }}>
            <Typography
              level="h2"
              sx={{
                textAlign: "center",
                fontFamily: "Jacques Francois, sans-serif",
                fontSize: "35px",
              }}
            >
              Walt Disney World
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              width: "50%",
              height: { xs: "auto" },
              alignItems: "end",
            }}
          >
            <a
              href={images[2].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents", width: "100%", height: "100%" }}
            >
              <HoverImage src={images[2].src} alt={images[2].alt} />
            </a>
          </Stack>
        </Stack>
        {/* Disneyland */}
        <Stack
          sx={{
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr",
            my: 5,
          }}
        >
          <Stack sx={{ width: "50%", justifyContent: "center" }}>
            <Typography
              level="h2"
              sx={{
                textAlign: "center",
                fontFamily: "Jacques Francois, sans-serif",
                fontSize: "35px",
              }}
            >
              Disneyland
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              width: "50%",
              height: { xs: "auto" },
              alignItems: "end",
            }}
          >
            <a
              href={images[3].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents", width: "100%", height: "100%" }}
            >
              <HoverImage src={images[3].src} alt={images[3].alt} />
            </a>
          </Stack>
        </Stack>
        {/* PortAventura */}
        <Stack
          sx={{
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr",
            my: 5,
          }}
        >
          <Stack sx={{ width: "50%", justifyContent: "center" }}>
            <Typography
              level="h2"
              sx={{
                textAlign: "center",
                fontFamily: "Jacques Francois, sans-serif",
                fontSize: "35px",
              }}
            >
              PortAventura World
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              width: "50%",
              height: { xs: "auto" },
              alignItems: "end",
            }}
          >
            <a
              href={images[4].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents", width: "100%", height: "100%" }}
            >
              <HoverImage src={images[4].src} alt={images[4].alt} />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
