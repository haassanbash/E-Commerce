import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// // import required modules
import { Pagination } from 'swiper/modules';
import './hero.css';
import IconSection from "./iconSection";


export default function Hero() {
    const swiperItem = [
        { gender: "Men", imgSrc: "src/assets/banner-15.jpg" },
        { gender: "Women", imgSrc: "src/assets/banner-25.jpg" }

    ]
    const theme = useTheme();
    return (
        <>
        <Container sx={{display:"flex",flexDirection:'column'}} >
            <Box className="" sx={{ display: 'flex',justifyContent:'space-between',alignItems:'center',gap:2,pt:1.5}}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <Box flexGrow={1}>
                    {/* <Box > */}
                        {swiperItem.map(item => {
                            return (
                                <SwiperSlide key={item.imgSrc} className="parent-slider "  >
                                    <Box sx={{backgroundColor:"none",height:"full",position: 'relative'}}>
                                    <img src={item.imgSrc}  alt="" width={"100%"} height={"100%"} />
                                    </Box>
                                    <Box className=" "
                                         sx={{
                                            [theme.breakpoints.up('sm')]: {
                                                position: "absolute",
                                                textAlign: "left",
                                                transform: " translateY(-50%)",
                                                top: "50%", left: "10%"
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                pt: 4,
                                                pb: 6,
                                                px: 3,
                                                backgroundColor: "#F2F0EF",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ color: "#222" }} variant="h5">
                                            Life Style Collection
                                        </Typography>
                                        <Typography sx={{ color: "#222", fontWeight: "400", my: 1 }}>
                                            {item.gender}
                                        </Typography>
                                        <Stack direction={"row"} alignItems={"center"}>
                                            <Typography mr={1} color={"#333"} variant={"h4"} >
                                                Sale Up TO
                                            </Typography>
                                            <Typography color={"#D23F57"} variant={"h4"} >
                                                30% OFF
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{
                                            color: "#000",
                                            fontWeight: "300",
                                            mr: 1
                                        }}>
                                            Get Free Shipping In Order Over $99.9
                                        </Typography>
                                        <Button sx={{
                                            px: "15px",
                                            py: "13px",
                                            mt: 3,
                                            backgroundColor: "#222",
                                            boxShadow: "0px 4px 16px rgba(43,25,69,0.1)",
                                            color: "#fff",
                                            borderRadius: "1px",
                                            "& :hover": {
                                                bgcolor: "#0151515",
                                                boxShadow: "0px 4px 16px rgba(43,25,69,0.1)",
                                            }
                                        }}
                                            variant="contained">
                                            Shop Now
                                        </Button>
                                    </Box>
                                    </SwiperSlide>
                            )
                        })}
                        </Box>
            </Swiper>
            <Box className=""  sx={{ display: { xs: 'none', md: "block",minWidth:'26.5%' },alignItems:'center' }} >
                <Box sx={{ position: 'relative' }}>
                    <img width={"100%"} src="src\assets\banner-17.jpg" alt="" />
                    <Stack sx={{
                        position: 'absolute',
                        left: "33px",
                        transform: " translateY(-50%)",
                        top: "50%",
                    }}>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                                fontSize: "18px",
                            }} >
                            NEW ARRIAVALS
                        </Typography>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                                lineHeight: '16px',
                                fontSize: "18px",
                                mt: 1,
                            }} >
                            Summer
                        </Typography>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                            }}>
                            SALE 20% OFF
                        </Typography>
                        <Link sx={{
                            color: "#2834455",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "0.2s",
                            "&:hover": {
                                color: "#D23F57"
                            }
                        }}
                            href="#"
                            underline="none"
                        >
                            Shop Now
                            <ArrowForward sx={{ fontSize: "13px" }} />
                        </Link>
                    </Stack>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <img width={"100%"} src="src\assets\banner-16.jpg" alt="" />
                    <Stack sx={{
                        position: 'absolute',
                        left: "33px",
                        transform: " translateY(-50%)",
                        top: "50%",
                    }}>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                                fontSize: "18px",
                            }} >
                            Gamming 4K
                        </Typography>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                                lineHeight: '16px',
                                fontSize: "18px",
                                mt: 1,
                            }} >
                            Desktops &
                        </Typography>
                        <Typography variant="caption"
                            sx={{
                                color: "#2834455",
                            }}>
                            Labtops
                        </Typography>
                        <Link sx={{
                            color: "#2834455",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "0.2s",
                            "&:hover": {
                                color: "#D23F57"
                            }
                        }}
                            href="#"
                            underline="none"
                        >
                            Shop Now
                            <ArrowForward sx={{ fontSize: "13px" }} />
                        </Link>
                    </Stack>
                </Box>
            </Box>

            </Box>
            <IconSection />

        </Container>
        </>
    )
} 
