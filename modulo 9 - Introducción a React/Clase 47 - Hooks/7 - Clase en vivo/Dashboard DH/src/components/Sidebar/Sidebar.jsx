import logo from "../../assets/images/logo-DH.png"
import {Link} from "react-router-dom"
import './Sidebar.css'
function Sidebar() {
    return (    
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span>
                </Link>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/movies">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
                </Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/genres">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
                </Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/search">
					<i className="fas fa-fw fa-search"></i>
					<span>Search</span>
                </Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default Sidebar