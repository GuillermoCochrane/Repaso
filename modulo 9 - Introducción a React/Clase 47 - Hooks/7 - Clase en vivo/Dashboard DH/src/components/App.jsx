import "../assets/css/app.css"
import Sidebar from "./Sidebar/Sidebar"
import ContentWrapper from "./ContentWrapper/ContentWrapper"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </BrowserRouter>
  )
}

export default App
