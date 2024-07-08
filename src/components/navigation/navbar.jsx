import { Stack, Typography } from "@mui/joy";


export const Navbar = () => {
  return (
    <Stack component="nav" sx={{
      py: 1,
      flexDirection: "row",
      display: "grid",
      background: "pink",
    }}>
      <Stack
        sx={{
          py: 1,
          flexDirection: "row",
          background: "red",
        }}
      >
        <Stack component="section" />

        <Stack component="section" sx={{ alignItems: "center" }}>
          
            <Typography
              level="h1"
              sx={{
                fontFamily: "italiana, sans-serif",
                fontWeight: "lighter",
                fontSize: { xs: "32px", lg: "64px" },
                textAlign: "center",
              }}
            >
              Check-attraction
            </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
