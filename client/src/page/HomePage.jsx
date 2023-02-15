import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs"
import { Box } from '@mui/material';
import uiConfigs from '../configs/ui.configs';
import Container from '../components/common/Container';
import MediaSlide from '../components/common/MediaSlide.jsx';


const HomePage = () => {
    return (
        <>
            <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular}></HeroSlide>

            <Box sx={{ ...uiConfigs.style.mainContent }}>
                <Container header="popular movies">
                    <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular}>
                    </MediaSlide>
                </Container>

                <Container header="popular series">
                    <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular}>
                    </MediaSlide>
                </Container>

                <Container header="top rated movies">
                    <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated}>
                    </MediaSlide>
                </Container>

                <Container header="top rated series">
                    <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated}>
                    </MediaSlide>
                </Container>
            </Box>

        </>
    );
};

export default HomePage;