import Topbar from "./Topbar/Topbar"
import ContentRowTop from "./ContentRowTop/ContentRowTop"
import Footer from './Footer/Footer'
import MovieTable from './MovieTable/MovieTable'
import Error404 from './Error404/Error404'
import {Route, Switch} from "react-router-dom"
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar/>
                <Switch>
                    <Route path="/" exact component={ContentRowTop}/>
                    <Route path="/movies" exact component={MovieTable}/>
                    <Route  component={Error404}/>
                </Switch>
            </div>
            
            <Footer />
        </div>

    )
}

export default ContentWrapper