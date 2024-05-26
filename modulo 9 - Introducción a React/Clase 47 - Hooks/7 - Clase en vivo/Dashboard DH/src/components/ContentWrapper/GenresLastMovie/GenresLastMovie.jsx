import GenresInDb from "../ContentRowTop/GenresInDb/GenresInDb"
import LastMovieInDb from "../ContentRowTop/LastMovieInDb/LastMovieInDb"
function LastMovieGenresContainer() {
    return (
        <div className="row">
            <LastMovieInDb/>
            <GenresInDb/>
        </div>
    );
}

export default LastMovieGenresContainer;