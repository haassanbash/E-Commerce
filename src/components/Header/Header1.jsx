import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
//Menu-Selected
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

//Menu-Selected-items

const options = [
    'Ar',
    'EN',
];
const Header1 = () => {
    //Menu-Func
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {

        setSelectedIndex(index);
        setAnchorEl(null);
    };


    0
    const handleClose = () => {
        setAnchorEl(null);
    };
    //End-Menu-Func
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#2B3445",
                    py:"4px",
                    borderBottomRightRadius:10,
                    borderBottomLeftRadius:10

                }}>
                    <Container>
                    <Stack direction={"row"} alignItems={"center"}>
                    <Typography
                        sx={{
                            mr: 2,
                            padding: "3px 10px",
                            bgcolor: "#D23f57",
                            borderRadius: '12px',
                            fontSize: "10px",
                            fontWeight: "bold",
                            color: '#fff'
                        }}>
                        HOT
                    </Typography>
                    <Typography
                        sx={{

                            fontSize: "12px",
                            fontWeight: "300",
                            color: '#fff'
                        }}
                        variant="body2">
                        Free Express Shipping
                    </Typography>
                    <Box flexGrow={1} />

                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined sx={{fontSize:"17px",color:"#fff"}} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined sx={{fontSize:"17px"}}  />
                            </IconButton>
                        )}
                    </div>
                            <List
                                component="nav"
                                aria-label="Device settings"
                                sx={{p:"0",m:"0"}}
                                >
                                <ListItem
                                    id="lock-button"
                                    aria-haspopup="listbox"
                                    aria-controls="lock-menu"
                                    aria-label="EN"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClickListItem}
                                    sx={{ "&:hover":{cursor:"pointer"} ,px:1}}
                                >
                                    <ListItemText
                                    sx={{".MuiTypography-root" :{fontsize:"10px",color:'#fff'}}}
                                        secondary={options[selectedIndex]}
                                    />
                                <ExpandMore sx={{fontSize:'16px'}} />
                                </ListItem>
                            </List>
                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                }}
                            >
                                {options.map((option, index) => (
                                    <MenuItem
                                    sx={{  fontSize:"12px" , p:"3px 10px" , minHeight:"10px"}}

                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                    <InstagramIcon
                        sx={{
                            fontSize: "17px",
                            color: "#fff"
                        }} />
                    <XIcon
                        sx={{
                            fontSize: "17px",
                            color: "#fff",
                            mx: 1
                        }} />
                    <FacebookIcon
                        sx={{
                            fontSize: "17px",
                            color: "#fff",
                            mr:"5px"
                        }} />
                </Stack>
                    </Container>
               
            </Box>
        </>
    )
}
export default Header1;