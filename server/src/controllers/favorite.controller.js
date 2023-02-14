import responseHandle from "../handlers/response.handle.js";
import favouriteModel from "../models/favourite.model.js";

const addFavorite = async (req, res) => {
    try {
        const isFavorite = await favouriteModel.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
        })

        if (isFavorite) return responseHandle.ok(res, isFavorite);

        const favorite = new favouriteModel({
            ...res.body,
            user: req.user.id
        });

        await favorite.save();

        responseHandle.created(res, favorite)
    }
    catch {
        responseHandle.error(res)
    }
}

const removeFavorite = async (req, res) => {
    try {
        const { favoriteId } = req.params;
        const favorite = await favouriteModel.findOne({
            user: req.user.od,
            _id: favoriteId
        })

        if (favorite) return responseHandle.notfound(res);

        await favorite.save();

        responseHandle.ok(res);
    }
    catch {
        responseHandle.error(res);
    }
}

const getFavoriteOfUser = async (req, res) => {
    try {
        const favorite = await favouriteModel.find({ user: req.user.id }).sort("-createAt");

        responseHandle.ok(res, favorite);

    }
    catch {
        responseHandle.error(res)
    }
}

export default { addFavorite, removeFavorite, getFavoriteOfUser }