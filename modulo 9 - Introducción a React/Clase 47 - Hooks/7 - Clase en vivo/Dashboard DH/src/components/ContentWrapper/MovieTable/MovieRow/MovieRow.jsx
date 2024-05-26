import PropTypes from 'prop-types';

function MovieRow({id, title="Pelicula sin título", rating, awards, length}) {
  return (
        <tr>
            <td className='text-center'>{id}</td>
            <td >{title}</td>
            <td className='text-center'>{rating}</td>
            <td className='text-center'>{awards}</td>
            <td className='text-center'>{length ? `${length} min` : "-"}</td>
        </tr>
  )
}

MovieRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  awards: PropTypes.number,
  length: PropTypes.number
}
export default MovieRow