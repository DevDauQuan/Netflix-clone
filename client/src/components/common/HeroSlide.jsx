import React, { useEffect, useState } from 'react';
import { PlayArrowIcon } from "@mui/icons-material/PlayArrow";
import { Box, Button, Chip, Divider, Stack, Typography, useTheme } from "@mui/material"
import { useDispatch } from 'react-redux';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { toast } from "react-toastify";
import { setGlobalLoading } from "../../redux/features/globalLoadingSlice";
import { routeGen } from "../../routes/routes";
import uiConfigs from "../../configs/ui.configs";
import CircularRate from './CircularRate';
import tmdbConfigs from '../../api/configs/tmdb.configs';
import genreApi from "../../api/modules/genre.api";
import mediaApi from "../../api/modules/media.api"

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HeroSlide = ({ mediaType, mediaCategory }) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getMedias = async () => {

            const { response, err } = await mediaApi.getList({ mediaType, mediaCategory, page: 1 });

            if (response) setMovies(response.results);

            if (err) toast.error(err.message);

            dispatch(setGlobalLoading(false));
        }

        const getGenres = async () => {
            dispatch(setGlobalLoading(true));

            const { response, err } = await genreApi.getList({ mediaType });

            if (response) {
                setGenres(response.results);
                getMedias();
            }

            if (err) {
                toast.error(err.message);
                dispatch(setGlobalLoading(false));
            }
        }
        getGenres()
        console.log(1);
    }, [dispatch, mediaType, mediaCategory]);

    return (
        <Box sx={{
            position: "relative",
            color: "primay.contrastText",
            "&::before": {
                content: '"',
                width: "100%",
                height: "30%",
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 2,
                pointerEvents: "none",
                ...uiConfigs.style.gradientBgImage[theme.palette.mode]
            }
        }}>
            <Swiper grabCursor={true} loop={true} modules={[Autoplay]}
                style={{ width: "100%", height: "max-content" }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {movies.map((movie, index) => {
                    <SwiperSlide>

                    </SwiperSlide>
                })}
            </Swiper>
        </Box>
    );
};

export default HeroSlide;