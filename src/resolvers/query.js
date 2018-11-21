const Movies = require('../schemas/movies') ;

function movies(_, args, context, info) {
    return Movies.find({ is_active: true }).then(
        (movies) => {
            return movies;
        }
    )
    .catch((err) => {
        throw new Error(err)
    });
}

function movie(_, args, context, info) {
    return Movies.findById(args.id).then(
        (movie) => {
            return movie;
        }
    )
    .catch(
        (error) => { throw new Error(error); }
    );
}

module.exports = {
    movies,
    movie
}
