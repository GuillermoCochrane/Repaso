import GenresInDb from "./GenresInDb"
import LastMovieInDb from "./LastMovieInDb"
function LastMovieGenresContainer() {
    return (
        <div className="row">
            <LastMovieInDb/>
            <GenresInDb/>
        </div>
    );
}

export default LastMovieGenresContainer;