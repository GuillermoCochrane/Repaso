import { Component } from 'react';
import GenreCard from './GenreCard/GenreCard';

class GenresInDb extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }

    getGenres = async () => {
        const response = await fetch('/api/api/genres');
        const data = await response.json();
        console.log(data.data)
        this.setState({
            genres: data.data
        });
    }

    componentDidMount() {
        try {
            this.getGenres();
        } catch (error) {
            console.log(error);
        }
    }

    render() {  
            return (
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {   
                                    this.state.genres.length == 0 ?
                                    <p className="text-center w-100 text-muted">No genres in database</p> :
                                    this.state.genres.map((genre, i) =>
                                        <GenreCard genreName={genre.name} key={`item-${genre.name}${i}
                                    `}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
export default GenresInDb;