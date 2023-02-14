import responseHandle from "../handlers/response.handle.js";
import tmdbApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
    try {
        const { personId } = req.params;

        const person = await tmdbApi.personDetails({ personId });

        responseHandle.ok(res, person);
    }
    catch {
        responseHandle.error(res);
    }
}

const personMedias = async (req, res) => {
    try {
        const { personId } = req.params;

        const medias = await tmdbApi.personMedias({ personId });

        responseHandle.ok(res, medias)
    }
    catch {
        responseHandle.error(res);
    }

}

export default { personDetail, personMedias }