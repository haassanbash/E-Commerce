import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export default function IconSection() {
    const theme=useTheme() 
  return (
    <Container  sx={{mt:3, 
                bgcolor:theme.palette.mode==='dark'?'#000':'#fff'
    }}>
        <Stack  className="" 
                divider={useMediaQuery('(min-width:848px)')?<Divider orientation="vertical" flexItem />:null} 
                sx={{flexWrap:"wrap"}} 
                flexDirection={"row"} 
                justifyContent={"center"} 
                alignContent={'center'}>
            <MyBox icons={<ElectricBoltIcon />} title={"Fast Delivery"} subTitle={" Start From 10 $"}/>
            <Divider />
            <MyBox icons={<WorkspacePremiumIcon />} title={"Memory Guarantee"} subTitle={" 7 Days Back"}/>
            <Divider />

            <MyBox icons={<AccessAlarmIcon />} title={"365 Days"} subTitle={"For Free Return"}/>
            <Divider />

            <MyBox icons={<CreditScoreIcon />} title={"Payment"} subTitle={"Secure System"}/>

        </Stack>

    </Container>
  )
}
import { useTheme } from "@emotion/react";

  function MyBox({icons,title,subTitle}) {
    const theme=useTheme()
  return (
    <Box className="" 
        sx={{display:"flex",
            flexGrow:1,
              alignItems:'center',
              px:3,
              py:1.6,
              width:"250px",
              gap:2,
              justifyContent:useMediaQuery('(min-width:565px)')?'left':'center'}}>
        {icons}
        <Box sx={{display:'flex',flexDirection:'column',ml:3,justifyContent:"center",alignItems:'center'}}>
            <Typography  variant="body1"> {title}</Typography>
            <Typography variant="body1" sx={{fontWeight:300,color:theme.palette.text.secondary}}> {subTitle}</Typography>

        </Box>
     </Box>
  )
}
