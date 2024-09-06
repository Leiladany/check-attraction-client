import React, { useState } from "react";
import { Stack, Typography, Input, Button, Box } from "@mui/joy";
import { FaRegStar, FaStar, FaRegEdit, FaEdit } from "react-icons/fa";
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri";

export const ListPage = () => {
  const [isStarHovered, setIsStarHovered] = useState(false);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

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
      <Stack sx={{ alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "2px solid #6402b2",
            width: "60%",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            height: 55,
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ color: "#6402b2" }}>List Name</Typography>
          <Stack
            sx={{ flexDirection: "row", gap: "25px", alignItems: "center" }}
          >
            <Box
              onMouseEnter={() => setIsStarHovered(true)}
              onMouseLeave={() => setIsStarHovered(false)}
              sx={{ fontSize: "25px", cursor:"pointer" }}
            >
              {isStarHovered ? (
                <FaStar style={{ color: "#6402b2" }} />
              ) : (
                <FaRegStar style={{ color: "#6402b2" }} />
              )}
            </Box>
            <Box
              onMouseEnter={() => setIsEditHovered(true)}
              onMouseLeave={() => setIsEditHovered(false)}
              sx={{ fontSize: "25px", cursor:"pointer" }}
            >
              {isEditHovered ? (
                <FaEdit style={{ color: "#6402b2" }} />
              ) : (
                <FaRegEdit style={{ color: "#6402b2" }} />
              )}
            </Box>
            <Box
              onMouseEnter={() => setIsDeleteHovered(true)}
              onMouseLeave={() => setIsDeleteHovered(false)}
              sx={{ fontSize: "25px", cursor:"pointer" }}
            >
              {isDeleteHovered ? (
                <RiDeleteBin2Fill style={{ color: "#6402b2" }} />
              ) : (
                <RiDeleteBin2Line style={{ color: "#6402b2" }} />
              )}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
