import responseHandle from "../handlers/response.handle.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favourite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js"

const getList = async (req, res) => {
    try {
        const page = req.query;
        const { mediaType, mediaCategory } = req.params;

        const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });

        return responseHandle.ok(res, response);
    }
    catch {
        responseHandle.error(res);
    }
}

const getGenres = async (req, res) => {
    try {
        const { mediaType } = req.params;

        const response = await tmdbApi.mediaGenres({ mediaType });
        return responseHandle.ok(res, response);
    }
    catch {
        responseHandle.error(res);
    }
}

const search = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const { query, page } = req.query;

        const response = await tmdbApi.mediaSearch({ query, page, mediaType: mediaType === "people" ? "person" : mediaType });
    }
    catch {
        responseHandle.error(res);
    }
}

const getDetail = async (req, res) => {
    try {
        const { mediaType, mediaId } = req.params;
        const params = { mediaType, mediaId };

        const media = await tmdbApi.mediaDetail(params);

        media.credits = await tmdbApi.mediaCredits(params);

        const videos = await tmdbApi.mediaVideos(params);
        media.videos = videos;

        const recommend = await tmdbApi.mediaRecommend(params);
        media.recommend = recommend.results;

        media.images = await tmdbApi.mediaImages(params);

        const tokenDecode = tokenMiddleware.tokenDecode(req);

        if (tokenDecode) {
            const user = await userModel.findById(tokenDecode.data);

            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId });
                media.isFavorite = isFavorite !== null
            }
        }

        media.reviews = await reviewModel.find({ mediaId }).populate("user").sort("-createAt");

        responseHandle.ok(res, media);

    }
    catch {
        responseHandle.error(res);
    }
}

export default { getList, getGenres, getDetail, search }