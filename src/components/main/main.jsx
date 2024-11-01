import { useTheme } from "@emotion/react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlinedIcon';

export default function Main() {
    const theme=useTheme()
    const [alignment,setAlignment]=React.useState('left');
    const handleAlignments = (event,newAlignment)=>{
        setAlignment(newAlignment);
    }

    
    return (
        <Container>
            <Stack sx={{display:'flex',justifyContent:'space-between',flexDirection:'row',py:3,flexWrap:"wrap",gap:2.5}}>
                <Box>
                    <Typography variant="h6"> Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">
                        All Our New Arriaval in exclusive Brand Selection
                    </Typography>
                </Box>
                <ToggleButtonGroup 
                            color="error"
                            value={alignment}
                            exclusive
                            onChange={handleAlignments}
                            aria-label="text alignment"
                            sx={{
                                ".Mui-selected":{
                                    border:"1px solid rgb(233,69,96,0.5) !important",
                                    color:"#e94560",
                                    backgroundColor:"initial"
                                }
                            }}  >
                    <ToggleButton sx={{ color:theme.palette.text.primary}} className="myButton" value='left' aria-label="left aligned">
                        All Category
                    </ToggleButton>
                    <ToggleButton sx={{mx:"16px !important" ,color:theme.palette.text.primary}}  className="myButton" value='center' aria-label="centered">
                        Man Category
                    </ToggleButton>
                    <ToggleButton sx={{ color:theme.palette.text.primary}} className="myButton" value='right' aria-label="right aligned">
                        Women Category
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack>
                <Card sx={{maxWidth:345}}>
                    <CardMedia 
                                sx={{height:140 }}
                                image=""
                                title="green iguna">
                        <CardContent>
                           <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography gutterBottom  variant="h6" component={"div"}>T-Shirt</Typography>
                            <Typography variant="subtitle1" component={"p"}>12.9$</Typography>
                           </Stack>
                           <Typography variant="body2" color="text-secondary">Lorem ipsum dolor sit amet, 
                             accusamus rerum adipisci necessitatibus? Alias et nobis
                             </Typography>

                        </CardContent>
                        <CardActions sx={{justifyContent:"space-between"}}>
                            <Button size="small"> 
                                {/* <AddShoppingCartOutlinedIcon/> */}
                                Add To Cart
                                </Button>
                                <Rating precision={0.2}  name="read.only" value={5.5} readOnly/>
                        </CardActions>

                    </CardMedia>
                </Card>
            </Stack>
        </Container>
    )
}
