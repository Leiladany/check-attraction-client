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
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
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
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
        </Typography>
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
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
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
        </Typography>
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
        </Typography>
      </Stack>
    </Stack>
  );
};
