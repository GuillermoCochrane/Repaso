import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <MainContent />
            <Footer />
        </div>

    )
}

export default ContentWrapper