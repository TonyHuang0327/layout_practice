import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDrawer = (openState: boolean) => {
    setOpen(openState);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleOpenDrawer(true);
        }}
      ></Button>
      <Drawer
        open={open}
        onClose={() => {
          handleOpenDrawer(false);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <LogoDevIcon />
            <Typography variant="body1" color="initial">
              Dashdark X
            </Typography>
          </Box>

          <Typography variant="caption" color="gray">
            {"<>"}
          </Typography>
        </Box>

        <TextField />
        <List>
          {["All Pages", "Reports", "Products", "Tasks"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#081028",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sidebar />
    </Box>
  );
};
