import GenreCard from './GenreCard/GenreCard';
let genres = [
    {genreName: 'Acción'},
    {genreName: 'Animación'},
    {genreName: 'Aventura'},
    {genreName: 'CienciaFicción'},
    {genreName: 'Comedia'},
    {genreName: 'Documental'},
    {genreName: 'Drama'},
    {genreName: 'Fantasia'},
    {genreName: 'Infantiles'},
    {genreName: 'Musical'},
]

function GenresInDb() {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            genres.map((genre,i) => 
                                <GenreCard genreName={genre.genreName} key={`item-${genre.genreName}${i}`}/>
                            )
                        }
                    </div>
                </div>
            </div>
		</div>
    );
}
export default GenresInDb;