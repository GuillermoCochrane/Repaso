import './app.css'

function App() {
  return (
      <>

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
                <button className="btn btn-success">Cargar random</button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">

          <div className="row text-center">

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src="" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Titulo</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src="" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Titulo</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src="" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Titulo</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src="" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Titulo</h4>
                </div>
              </div>
            </div>

          </div>

      </div>

      </>
  )
}

export default App
