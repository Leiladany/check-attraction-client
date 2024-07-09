import { Stack, Typography, Divider } from "@mui/joy";

export const Footer = () => {
  return (
    <Stack component="footer">

      <Stack
        sx={{
          py: 2,
          display: "grid",
          borderTop: "1px solid black",
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
