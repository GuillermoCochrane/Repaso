import {Fragment, Component} from 'react';
import MovieList from './MovieRow/MovieRow';

let title = ["Id", "Título", "Calificación", "Premios", "Duración"];

class MovieTable extends Component {

	constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    getMovies = async () => {
        const response = await fetch('/api/api/movies');
        const data = await response.json();
        this.setState({
            movies: data.data
        });
    }

    componentDidMount() {
        try {
            this.getMovies();
        } catch (error) {
            console.log(error);
        }
    }


	render() {	
		return(
			<Fragment>
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
				
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										{
											title.map((item, i) => {
												return 	<th key = {`${item.title}-${i}`} className="text-center">
															{item}
														</th>
											})
										}
									</tr>
								</thead>
								<tfoot>
									<tr>
										{
											title.map((item, i) => {
												return 	<th key = {`${i}-${item.title}-${i}`} className="text-center">
															{item}
														</th>
											})	
										}
									</tr>
								</tfoot>
								<tbody>
								{
									this.state.movies.length == 0 ?
									<tr><th colSpan="5">No movies in database</th></tr> :
									this.state.movies.map((item, i) => {
										return <MovieList {...item} key = {`item-${i}`}/>
										})
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>            
			</Fragment>
		)
	}
}
export default MovieTable;