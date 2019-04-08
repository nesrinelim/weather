import React, { Component } from 'react';
import './App.css';
import Form from './comonent/form';
import Weather from './comonent/weather';

const API_KEY=''
// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {  
                   temperature : '' , 
                   country:'',
                   city : '' ,
                   humidity : '' , 
                   description : '' ,
                   error : ''
                  }
  }
  getweather= async ( event )=>{
    event.preventDefault()
     const city = event.target.elements.city.value
     const country = event.target.elements.country.value
     const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=2a5220abb62716a87294b78bacbf966e`)
     const data = await api.json()
    console.log(data)
    if (city && country) {
      this.setState({
        temperature : data.main.temp , 
        country: data.sys.country,
        city : data.name ,
        humidity : data.main.humidity , 
        description : data.weather[0].description ,
        error : ''
      })
    }
    else {
      this.setState({
        temperature : '' , 
        country:'',
        city : '' ,
        humidity : '' , 
        description : '' ,
        error : 'please enter data'
      })
    }
  }
  render() {
    return (
      <div className='wrapper'>
       <div className='form-container'>
       <i class="fas fa-cloud-sun-rain" style={{fontSize : '50px' }}></i>
          <h1>Weather App</h1>
          <Form getweather={this.getweather}/>
          <Weather 
              temperature = {this.state.temperature} 
              country= {this.state.country}
              city = {this.state.city}
              humidity = {this.state.humidity} 
              description = {this.state.description}
              error= {this.state.error}
          />
       </div>
      </div>
    );
  }
}

export default App;
