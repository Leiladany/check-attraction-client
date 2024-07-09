import { Box, Stack, Typography } from "@mui/joy";
import banner1 from "../assets/banner1.png";
import divisor from "../assets/divisor.png";

export const About = () => {
  const images = [
    { src: banner1, alt: "banner1" },
    { src: divisor, alt: "divisor" },
  ];

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
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
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
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
            About
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ alignItems: "center", my: 8 }}>
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: "Jacques Francois, sans-serif",
            padding: 1,
            width: "55%",
          }}
        >
          Welcome to CheckAttractions, where we've transformed the world of
          theme park exploration into an exciting, personalized adventure just
          for you! Established with a genuine passion for theme parks and the
          joy they bring, CheckAttractions is your go-to platform for creating,
          tracking, and optimizing your theme park experience.
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: { xs: "auto" },
            position: "relative",
          }}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            style={{ width: "80%", height: "100%", objectFit: "fill" }}
          />
        </Box>
      </Stack>
      <Stack sx={{ alignItems: "center", my: 8 }}>
        <Typography
          level="h2"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: "Jacques Francois, sans-serif",
            padding: 1,
          }}
        >
          Our Mission
        </Typography>
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: "Jacques Francois, sans-serif",
            padding: 1,
            width: "60%",
          }}
        >
          To immerse you in the magic of theme parks like never before. We're
          dedicated to building the most extensive database of theme parks
          globally, putting the power to plan your dream park day in the palm of
          your hand.
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: { xs: "auto" },
            position: "relative",
          }}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            style={{ width: "80%", height: "100%", objectFit: "fill" }}
          />
        </Box>
      </Stack>
      <Stack sx={{ alignItems: "center", my: 8 }}>
        <Typography
          level="h2"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: "Jacques Francois, sans-serif",
            padding: 1,
          }}
        >
          How It Works
        </Typography>
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: "Jacques Francois, sans-serif",
            padding: 1,
            width: "65%",
          }}
        >
          Select your preferred parks from our vast list, choose the attractions
          that excite you, and effortlessly mark them off as you conquer each
          thrilling ride.
        </Typography>
      </Stack>
    </Stack>
  );
};
