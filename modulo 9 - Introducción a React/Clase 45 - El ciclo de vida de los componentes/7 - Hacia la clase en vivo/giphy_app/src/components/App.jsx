import { Component } from 'react'
import './app.css'
import NavBar from './NavBar/NavBar'
import Gif from './Gif/Gif'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  randomGifList = async () => {
    let list = [];
    for (let i = 0; i < 4; i++) {
    list.push(await this.randomGif())
    }
    console.log(list)
    this.setState({ gifs: list });
    console.log("hiciste click")
  }

  async trendingGifs() {
    let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69');
    let data = await response.json();
    this.setState({
      gifs: data.data
    });
  }

  async randomGif() {
    let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69');
    let data = await response.json();
    console.log(data)
    return data.data; 
  }

  async componentDidMount() {
    try {
      await this.trendingGifs();
    } catch (error) {
      console.log(error)
    }
  }


  componentDidUpdate() {
    //console.log('componentDidUpdate')
  }

  render() { 

  return (
      <>
        <NavBar randomGifList={this.randomGifList} />

        <div className="container">

          <div className="row text-center">
            {
                this.state.gifs.length == 0 ? 
                <p className='text-center'>Cargando...</p> :
                (this.state.gifs).map((gif, index) => 
                  <Gif key={`gif${index}`} gif={gif} />
                )
            }
          </div>

      </div>

      </>
      )
    }
}

export default App