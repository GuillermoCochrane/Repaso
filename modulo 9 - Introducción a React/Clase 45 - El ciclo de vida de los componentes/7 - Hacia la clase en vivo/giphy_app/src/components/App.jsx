import { Component } from 'react'
import './app.css'
import NavBar from './NavBar/NavBar'
import Gif from './Gif/Gif'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: ''
    }
  } 

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {  

  return (
      <>

        <NavBar />

        <div className="container">

          <div className="row text-center">

            <Gif />
            <Gif />
            <Gif />
            <Gif />
            <Gif />
            <Gif />
            <Gif />
            <Gif />

          </div>

      </div>

      </>
      )
    }
}


export default App
