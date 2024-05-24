import propTypes from 'prop-types';

function InfoCard(props) {
    return (
        
            <div className="col-md-4 mb-4">
                    <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        
    );    
}

InfoCard.propTypes = {
    color: propTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
    title: propTypes.string.isRequired,
    count: propTypes.number.isRequired,
    icon: propTypes.oneOf(['award', 'user', 'film', 'exclamation-circle']).isRequired
}

InfoCard.defaultProps = {
    color: 'danger',
    title: 'Title not found',
    count: 0,
    icon: 'exclamation-circle'
}

export default InfoCard;