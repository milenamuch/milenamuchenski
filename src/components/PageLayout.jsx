import { ContactMail, ContactPage } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useRouteError } from "react-router-dom";

export const PageLayout = () => {
  const DrawerApp = () => {
    return (
      <Box style={{ minWitch: "10px " }}>
        <List>
          <ListItem>
            <ListItemButton to="/" LinkComponent={Link}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton to="/sobre" LinkComponent={Link}>
              <ListItemText primary="Sobre" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton to="/albuns" LinkComponent={Link}>
              <ListItemText primary="Álbuns" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton to="/noticias" LinkComponent={Link}>
              <ListItemText primary="Notícias" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton to="/contato" LinkComponent={Link}>
              <ListItemText primary="Contato" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false);

    const lideComOMenu = () => {
      setAberto(!aberto);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComOMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer open={aberto} onClose={lideComOMenu}>
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "80px" }} className="content" >
        <Outlet />
      </Box>
    </>
  );
};
