import { Stack, Typography, Divider } from "@mui/joy";

export const Footer = () => {
  return (
    <Stack component="footer">
      <Divider sx={{ mx: { xs: 2, lg: 10 } }} />

      <Stack
        sx={{
          py: 2,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr);" },
          zIndex: 10,
          gap: { xs: 2, lg: 0 },
        }}
      >
        <Stack
          component="section"
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        />

        <Stack
          component="section"
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 1,
            gridColumn: { xs: "1", lg: "2" },
            gridRow: { xs: "2", lg: "1" },
          }}
        >
          <Typography
            level="body-sm"
            sx={{
              fontWeight: "lighter",
            }}
          >
            Copyright© 2024
          </Typography>

          <Typography
            level="body-sm"
            sx={{
              fontFamily: "italiana, sans-serif",
              fontWeight: "lighter",
            }}
          >
            Check-attraction
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
