import { Box, Stack, Typography, Button } from "@mui/joy";
import background from "../assets/background.png";

export const HomePage = () => {
  const img = [{ src: background, alt: "background" }];

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack sx={{ my: 8 }}>
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
            my: 3,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
        </Typography>
        <Button sx={{ my: 3 }}>Button</Button>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
        }}
      >
        {img.map((img, index) => (
          <Box key={index} sx={{ width: "100%", height: { xs: "auto" } }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
