import { Divider, Stack, Typography } from "@mui/joy";


export const Navbar = () => {
  return (
    <Stack component="nav">
      <Stack
        sx={{
          py: 1,
          flexDirection: "row",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr);",
          zIndex: 10,
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
              ONESBRYNEe
            </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ mx: { xs: 2, lg: 10 } }} />
    </Stack>
  );
};
