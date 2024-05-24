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

  async componentDidMount() {
    try {
      let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69');
      let data = await response.json();
      console.log(data)
      this.setState(
        {
          gif: data.data.image_url
        }
      )
    } catch (error) {
      console.log(error)
    }
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