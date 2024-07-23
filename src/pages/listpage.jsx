import { Stack, Typography, Input, Button } from "@mui/joy";

export const ListPage = () => {
  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography level="h1" sx={{ ml: "50px" }}>
          #id Lists
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button
            sx={{
              width: "180px",
              borderRadius: "20px",
              mr: "15px",
              fontFamily: '"Kiwi Maru", serif',
              backgroundColor: "#8A00F7",
              "&:hover": {
                backgroundColor: "#6402b2",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              },
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                outline: "none",
              },
            }}
          >
            Create List
          </Button>
          <Input
            sx={{
              width: "180px",
              mr: "20px",
              borderRadius: "20px",
              border: "2px solid #8A00F7",
            }}
            placeholder="Search List"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
