import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedicon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";


const main = [
    {
        display: "home",
        path: "/",
        icon: <HomeOutLinedIcon></HomeOutLinedIcon>,
        state: "home"
    },
    {
        display: "movies",
        path: "/movie",
        icon: <SlideshowOutlinedIcon></SlideshowOutlinedIcon>,
        state: "movie"
    },
    {
        display: "tv series",
        path: "/tv",
        icon: <LiveTvOutlinedIcon></LiveTvOutlinedIcon>,
        state: "hometv"
    },
    {
        display: "search",
        path: "/search",
        icon: <SearchOffOutlinedIcon></SearchOffOutlinedIcon>,
        state: "search"
    },

]

const user = [
    {
        display: "favorites",
        path: "/favorites",
        icon: <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>,
        state: "favorite"
    },
    {
        display: "reviews",
        path: "/reviews",
        icon: <RateReviewOutlinedicon></RateReviewOutlinedicon>,
        state: "reviews"
    },
    {
        display: "password update",
        path: "/password-update",
        icon: <LockResetOutlinedIcon></LockResetOutlinedIcon>,
        state: "password.update"
    },
]

const menuConfigs = { main, user }

export default menuConfigs;