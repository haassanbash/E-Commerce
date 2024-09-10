import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#2B3445"
                }}>
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
                            <LightModeOutlined fontSize="small" />
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
                            <DarkModeOutlined  fontSize="small" />
                        </IconButton>
                    )}
                </div>
                <InstagramIcon 
                sx={{
                    fontSize:"14px",
                    color:"fff"
                }}/>
                <XIcon
                sx={{
                    fontSize:"14px",
                    color:"fff",
                    mx:1
                }} />
                <FacebookIcon
                sx={{
                    fontSize:"14px",
                    color:"fff"
                }} />
                </Stack>
            </Box>
        </>
    )
}