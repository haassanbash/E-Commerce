import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Person2Outlined } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";

import { Badge, Container, InputBase, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    border:'2px solid #777',
    flexGrow:0.49,
    justifyContent:'space-between',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: '300px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#777'
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
//Menu-Selected-items

const options = [
    'All Catogeries',
    'Cars',
    'Electronics',
    'Clothes'
];
const Header2 = () => {
    //Menu-Func
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
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
    //THEME
    const theme=useTheme();
    return (
        <>
            <Container sx={{ my: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Stack sx={{ alignItems: 'center' }}>
                    <ShoppingCartOutlined />
                    <Typography>E-Commerce</Typography>
                </Stack>
                <Search sx={{display:'flex', borderRadius:'18px'}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                      <List
                                component="nav"
                                aria-label="Device settings"
                                // @ts-ignore
                                sx={{ bgcolor:theme.palette.myColor.main ,
                                      borderTopRightRadius:"16px",
                                      borderBottomRightRadius:"16px",p:0 ,color:'#000'}}
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
                                    sx={{width:"95px",alignItems:'center',textAlign:'center',textWrap:'nowrap',
                                        "&:hover":{cursor:'pointer'}, 
                                        ".MuiTypography-root" :{fontsize:"10px",color:'black',fontWeight:'bold'}}}
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
                                    sx={{  fontSize:"13px" , p:"3px 10px" , minHeight:"10px"}}

                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                </Search>
                <Stack sx={{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <IconButton>
                    <Person2Outlined />
                </IconButton>

                </Stack>
            </Container>
        </>
    )
}
export default Header2;