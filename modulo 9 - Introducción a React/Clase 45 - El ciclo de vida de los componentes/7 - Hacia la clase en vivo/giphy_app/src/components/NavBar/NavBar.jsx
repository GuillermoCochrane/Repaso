/* eslint-disable react/prop-types */
function NavBar({randomGifList}) {
    return (    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">GIPHY APP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-success" onClick={randomGifList} >Cargar random</button>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default NavBar