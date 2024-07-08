import { Box, Stack, Typography, Button } from "@mui/joy";
import background from "../assets/background.png";

export const HomePage = () => {
  const img = [{ src: background, alt: "background" }];

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack sx={{ alignItems: "center", my: 8 }}>
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
            my: 3,
            fontFamily: '"Kiwi Maru", serif',
            padding: 2,
          }}
        >
          Create your own personal checklist for your favorite theme parks.
        </Typography>
        <Button sx={{ width: "13%", mt: 5, fontFamily: '"Kiwi Maru", serif', }}>Create Your Account</Button>
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
