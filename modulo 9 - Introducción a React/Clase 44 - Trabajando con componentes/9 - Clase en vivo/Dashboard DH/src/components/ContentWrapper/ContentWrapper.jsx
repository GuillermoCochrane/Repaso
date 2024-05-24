import Topbar from "./Topbar/Topbar"
import ContentRowTop from "./ContentRowTop/ContentRowTop"
import Footer from './Footer/Footer'
import MovieTable from './MovieTable/MovieTable'
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar/>
                <ContentRowTop/>
            </div>
            <MovieTable/>
            <Footer />
        </div>

    )
}

export default ContentWrapper