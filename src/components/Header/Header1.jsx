import { Box, IconButton, Stack, Typography } from "@mui/material";
export default function Header1(){
    return(
        <>
        <Box
        sx={{
            bgcolor:"#2B3445"
        }}>
            <Stack direction={"row"} alignItems={"center"}>
            <Typography 
            sx={{
                mr:2,
                padding:"3px 10px",
                bgcolor:"#D23f57",
                borderRadius:'12px',
                fontSize:"10px",
                fontWeight:"bold",
                color:'#fff'
            }}>
                        HOT
            </Typography>
             <Typography
             sx={{
       
                fontSize:"12px",
                fontWeight:"300",
                color:'#fff'
            }}
            variant="body2">
                Free Express Shipping
            </Typography>
      
            </Stack>
        </Box>
        </>
    )
}