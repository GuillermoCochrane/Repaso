import PropTypes from 'prop-types';

//destructuring de props: en lugar de function GenreCard(props) y props.genreName donde haga falta, se puede hacer GenreCard({genreName}) y directamente usamos genreName donde haga falta
//Debido a futuros cambiosen React, defaultProps se dejara de usar, y en su lugar se hara destructuring del prop (en este caso, genreName), y directamente introcuimos el valor por defecto de genreName en el componente.

function GenreCard({genreName='Género no especificado'}) {
    return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        {genreName}
                    </div>
                </div>
            </div>
    );
}

GenreCard.propTypes = {
    genreName: PropTypes.string.isRequired
}
/* 
GenreCard.defaultProps = {
    genreName: 'Género no especificado'
}
 */
export default GenreCard;