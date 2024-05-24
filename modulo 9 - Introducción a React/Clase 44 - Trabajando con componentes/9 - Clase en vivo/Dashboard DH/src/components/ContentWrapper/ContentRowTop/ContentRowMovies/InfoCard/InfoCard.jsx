import PropTypes from 'prop-types';

function InfoCard({ color='danger', title='Título no encontrado', count=0, icon='exclamation-circle' }) {
    return (
        
            <div className="col-md-4 mb-4">
                    <div className={`card border-left-${color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        
    );    
}

InfoCard.propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    icon: PropTypes.oneOf(['award', 'user', 'film', 'exclamation-circle']).isRequired
}

/* 
InfoCard.defaultProps = {
    color: 'danger',
    title: 'Title not found',
    count: 0,
    icon: 'exclamation-circle'
}
 */
export default InfoCard;