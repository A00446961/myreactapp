import { Component } from 'react'
import image from './download.jpeg'
import cold from '../assets/cold.png'
import mild from '../assets/mild.png'
import sunny from '../assets/sunny.png'
import axios from 'axios'
import '../App.css'


class Mytown extends Component {

  constructor() {
    super()
    this.state = {
      temperature: 0,
      tempImg: ""
    }
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather() {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Delhi,India&appid=429736441cf3572838aa10530929f7cd")
      .then((res) => {
        let temp = res.data.main.temp
        let cTemp = parseInt(temp - 273)
        let kTemp = parseInt(cTemp*1.8+32)
        this.setState({ temperature: cTemp })
        this.setState({ ktemperature: kTemp })
        this.setImage(cTemp);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setImage(temp) {
    if (temp <= 10) {
      this.setState({ tempImg: cold })
    } else if (temp <= 20) {
      this.setState({ tempImg: mild })
    }
    else {
      this.setState({ tempImg: sunny })
    }
  }

  render() {
    return (
      <div>
        <h1>I am from Delhi, India</h1>
        <p> Delhi, India’s capital territory, is a massive metropolitan area in the country’s north.</p>
        <img src={image} />
       <hr></hr>
       <p> <h3>Current Weather for </h3> <b>Delhi, India </b></p>
        <div class="weather-icon">
          <img src={this.state.tempImg}></img> <span>{this.state.temperature}°C or {this.state.ktemperature}°F </span>
        </div>
      </div>
    )
  }

}
  

export default Mytown;
