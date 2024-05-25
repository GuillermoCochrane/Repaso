import PropTypes from 'prop-types';

function MovieRow({id, title="Pelicula sin título", score, awards, duration}) {
  return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{score}</td>
            <td>{awards}</td>
            <td>{duration}</td>
        </tr>
  )
}

MovieRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  score: PropTypes.number,
  awards: PropTypes.number,
  duration: PropTypes.number
}
export default MovieRow