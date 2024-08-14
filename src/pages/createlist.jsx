import React, { useState } from "react";
import { Stack, Box } from "@mui/joy";
import TextField from "@mui/material/TextField";

export const CreateList = () => {
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
      </Stack>
      <Stack sx={{ alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "4px solid #6402b2",
            width: "61%",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            height: 56,
            borderRadius: "5px",
            padding: "0 10px",
          }}
        >
          <TextField
            placeholder="Type in here…"
            sx={{ color: "#6402b2", flex: 1 }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
