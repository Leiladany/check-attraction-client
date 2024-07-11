import React from "react";
import {
  Box,
  Stack,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
} from "@mui/joy";
import logoattraction from "../../assets/logoattraction.png";
import { FaMasksTheater } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const links = [
    { id: "about", label: "About", href: "/about" },
    { id: "themeparks", label: "Theme Parks", href: "/themeparks" },
    { id: "contacts", label: "Contacts", href: "/contacts" },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <Stack
      component="nav"
      sx={{
        py: 1,
        flexDirection: "row",
        display: "grid",
        borderBottom: "1px solid black",
        justifyContent: { xs: "space-between" },
        gridTemplateColumns: { xs: "1fr 1fr", lg: "1fr 1fr 1fr" },
      }}
    >
      {/* Logo and Title */}
      <Stack
        sx={{
          py: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ pr: { xs: 1, lg: 3 } }}>
          <Link href="/" height="60px" width="100px">
            <img src={logoattraction} alt="Logo" width="130%" />
          </Link>
        </Box>
      </Stack>

      {/* Desktop Navigation Links */}
      <Box
        sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {links.map((link) => (
            <RouterLink
              key={link.id} // Assign a unique key based on an identifier (e.g., id or unique label)
              to={link.href}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: "relative",
                color: "#232849",
                textDecoration: "none",
                "&:hover .icon": {
                  display: "inline-block",
                },
                "&:hover": {
                  textDecoration: "none",
                },
                width: "max-content",
              }}
            >
              <span
                className="icon"
                style={{
                  display: hoveredIndex === link.id ? "inline-block" : "none",
                  position: "absolute",
                  left: "-20px",
                  bottom: "35px",
                  verticalAlign: "middle",
                  color: "white",
                }}
              >
                <FaMasksTheater />
              </span>
              {link.label}
              <span
                className="icon"
                style={{
                  display: hoveredIndex === link.id ? "inline-block" : "none",
                  position: "absolute",
                  right: "-20px",
                  bottom: "35px",
                  verticalAlign: "middle",
                  color: "black",
                }}
              >
                <FaMasksTheater />
              </span>
            </RouterLink>
          ))}
        </Stack>
      </Box>

      {/* Mobile Navigation (Dropdown Menu) */}
      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <Dropdown>
          <MenuButton
            sx={{
              border: "none",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <MenuIcon sx={{ fontSize: 50, color: "#232849" }} />
          </MenuButton>
          <Menu>
            {links.map((link) => (
              <MenuItem key={link.id}>
                {" "}
                {/* Ensure each MenuItem has a unique key */}
                <Link
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    position: "relative",
                    color: "#232849",
                    textDecoration: "none",
                    "&:hover .icon": {
                      display: "inline-block",
                    },
                    "&:hover": {
                      textDecoration: "none",
                    },
                    width: "max-content",
                  }}
                >
                  <span
                    className="icon"
                    style={{
                      display:
                        hoveredIndex === link.id ? "inline-block" : "none",
                      position: "absolute",
                      left: "-20px",
                      bottom: "35px",
                      verticalAlign: "middle",
                      color: "white",
                    }}
                  >
                    <FaMasksTheater />
                  </span>
                  {link.label}
                  <span
                    className="icon"
                    style={{
                      display:
                        hoveredIndex === link.id ? "inline-block" : "none",
                      position: "absolute",
                      right: "-20px",
                      bottom: "35px",
                      verticalAlign: "middle",
                      color: "white",
                    }}
                  >
                    <FaMasksTheater />
                  </span>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </Box>
    </Stack>
  );
};
