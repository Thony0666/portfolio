import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { Home, Menu, Person, Star, Work } from "@mui/icons-material";
import Link from "next/link";

export default function ButtonDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          bgcolor={"#0B1136"}
          height={"100%"}
        >
          <Link href={"#home"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="testfont">
                  <Home sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Home"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"#skills"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="testfont">
                  <Star sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Skills"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"#about"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="testfont">
                  <Person sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"About Me"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"#project"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="testfont">
                  <Work sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={"Project"} />
              </ListItemButton>
            </ListItem>
          </Link>
        </Box>
      </Drawer>
    </div>
  );
}
