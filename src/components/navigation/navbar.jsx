import { Stack, Typography } from "@mui/joy";

export const Navbar = () => {
  return (
    <Stack
      component="nav"
      sx={{
        py: 1,
        flexDirection: "row",
        display: "grid",
        borderBottom: "1px solid black",
      }}
    >
      <Stack
        sx={{
          py: 1,
          flexDirection: "row",
        }}
      >
        <Stack component="section" />

        <Stack component="section" sx={{ alignItems: "center" }}>
          <Typography
            level="h1"
            sx={{
              fontFamily: "italiana, sans-serif",
              fontWeight: "lighter",
              fontSize: { xs: "32px", lg: "50px" },
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
