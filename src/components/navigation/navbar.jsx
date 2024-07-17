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
        flexDirection: "row",
        display: "grid",
        borderBottom: "1px solid black",
        justifyContent: { xs: "space-between" },
        gridTemplateColumns: { xs: "1fr 1fr", lg: "1fr 1fr 1fr" },
        fontFamily: "Jacques Francois, sans-serif",
        fontSize: "17px",
        color: "black",
      }}
    >
      <Stack
        sx={{
          pt: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ pr: { xs: 1, lg: 3 } }}>
          <Link href="/" height="60px" width="100px">
            <img src={logoattraction} alt="Logo" width="110%" />
          </Link>
        </Box>
      </Stack>

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
              key={link.id}
              to={link.href}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                color: "black",
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
                  color: "black",  // Apply black color here
                }}
              >
              </span>
            </RouterLink>
          ))}
        </Stack>
      </Box>

      {/* Mobile */}
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
                <Link
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    position: "relative",
                    color: "black",  // Apply black color here
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
