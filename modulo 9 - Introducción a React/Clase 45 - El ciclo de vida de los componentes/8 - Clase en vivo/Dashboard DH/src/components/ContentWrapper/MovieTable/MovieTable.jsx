import {Fragment} from 'react';
import MovieList from './MovieRow/MovieRow';

let movies = [
	{
		id: 1,
		title: 'Reto al destino',
		score: 20,
		awards: 15,
		duration: 120,
	},
	{
		id: 2,
		title: 'La caida del halcon negro',
		score: 10,
		awards: 18,
		duration: 240,
	},
];

let title = ["Id", "Título", "Calificación", "Premios", "Duración"];

function MovieTable(){
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
											return 	<th key = {`${item.title}-${i}`}>
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
											return 	<th key = {`${i}-${item.title}-${i}`}>
														{item}
													</th>
										})	
									}
								</tr>
							</tfoot>
							<tbody>
							{
								movies.map((item, i) => {
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
export default MovieTable;