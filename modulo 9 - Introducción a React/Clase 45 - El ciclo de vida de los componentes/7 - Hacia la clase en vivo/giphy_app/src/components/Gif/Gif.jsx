/* eslint-disable react/prop-types */
import './gif.css'
function Gif({ gif }) {
    return (
            <div className="col-lg-3 col-md-6 mb-4 card-container">
              <div className="card h-100 card-gif-container">
                <img className="card-img-top" src={gif.images.preview_gif.url} alt={gif.title} />
                <div className="card-body">
                  <h4 className="card-title">{gif.title}</h4>
                </div>
              </div>
            </div>
    )
}

export default Gif