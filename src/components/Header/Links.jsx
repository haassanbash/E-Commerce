import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";

export default function Links({title}) {
    return (
        <>
            <Box className=""
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    alignItems:'center',
                    position: 'relative',
                    ":hover .show-when-hover": { display: "block" },
                    ":hover ": { cursor: "pointer" }

                }}>
                <Typography>
                    {title}
                </Typography>
                <ExpandMore sx={{fontSize:'20px', ml:1}}/>
                <Box
                    className="show-when-hover "
                    sx={{
                        position: 'absolute',
                        top: "100%",
                        left: "50%",
                        minWidth: "170px",
                        transform: "translateX(-50%)",
                        display: "none"
                    }}>
                    <Paper sx={{ mt: 2 }}>
                        <nav aria-label="secondary mailbox folders ">
                            <List sx={{ py: 0, my: 0 }}>
                                {/* Start First List Item */}
                                <ListItem disablePadding sx={{ py: 0, my: 0 }}>
                                    <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                        <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Dashboard" />
                                    </ListItemButton>
                                </ListItem>
                                {/* End First List Item */}

                                {/* Start Second List Item */}
                                <ListItem disablePadding sx={{ py: 0, my: 0,position:'relative',":hover .sub-link":{display:'block'} }}>
                                    <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                        <ListItemText  sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 }, ":hover .sub-link": { display: 'block' } }} primary="Products" />                                        <Box flexGrow={1} />
                                        <KeyboardArrowRightOutlined fontSize="small" />
                                    </ListItemButton>
                                         {/* //Start subLink */}
                                         <Box className=" sub-link" sx={{display:'none', position:'absolute',top:0,left:"100%" }}>
                                        <Paper sx={{ml:0.5,minWidth:140}}>
                                            <nav aria-label="secondary mailbox folders">
                                                <List>
                                                    <ListItem disablePadding>
                                                        <ListItemButton  sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                                           <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Add Products" />
                                                        </ListItemButton>
                                                        </ListItem>
                                                        <ListItem disablePadding>
                                                        <ListItemButton>
                                                           <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Edit Products" />
                                                        </ListItemButton>

                                                    </ListItem>
                                                </List>
                                            </nav>

                                        </Paper>
                                        </Box>
                                    {/* //End subLink */}
                                    </ListItem>
                                    {/* End Second List Item */}
                                     {/* Start Third List Item */}

                                     <ListItem disablePadding sx={{ py: 0, my: 0 }}>
                                     <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Order" />

                                    </ListItemButton>
                               

                                </ListItem>
                                 {/* End Third List Item */}
                                {/* Start Four List Item */}

                                <ListItem disablePadding sx={{ py: 0, my: 0 }}>
                                    <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                        <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Profile" />

                                    </ListItemButton>
                                </ListItem>
                                {/* End Four List Item */}
                            </List>
                        </nav>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}