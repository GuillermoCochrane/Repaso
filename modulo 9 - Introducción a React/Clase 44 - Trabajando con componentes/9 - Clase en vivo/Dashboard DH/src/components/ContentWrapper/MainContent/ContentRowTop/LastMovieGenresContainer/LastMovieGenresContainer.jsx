import GenresInDb from "./GenresInDb/GenresInDb"
import LastMovieInDb from "./LastMovieInDb/LastMovieInDb"
function LastMovieGenresContainer() {
    return (
        <div className="row">
            <LastMovieInDb/>
            <GenresInDb/>
        </div>
    );
}

export default LastMovieGenresContainer;