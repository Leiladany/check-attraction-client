import { Stack, Typography, Input, Button } from "@mui/joy";

export const ListPage = () => {

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack sx={{ gridTemplateColumns: { xs: "1fr 1fr", lg: "1fr 1fr 1fr" }, flexDirection:"row" }}>
      <Typography>
        #id Lists
      </Typography>
      <Button sx={{width:"180px", borderRadius:"20px",}}>Create List</Button>
      <Input sx={{width:"180px", mr:"20px", borderRadius:"20px", border:"2px solid #8A00F7"}} placeholder="Search List" />
      </Stack>
    </Stack>
  );
};
