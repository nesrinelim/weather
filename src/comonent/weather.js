import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment className='info' >
           
             { this.props.temperature && <p className = 'info_key'> Temperature :
                <span className = 'info_value'> {(this.props.temperature - 273.15).toFixed(0)}° </span> </p> } 
             { this.props.city && <p className = 'info_key'> City :
                <span className = 'info_value'> {this.props.city}  </span> </p> } 
             { this.props.country && <p className = 'info_key'> Country :
                <span className = 'info_value'> {this.props.country}  </span> </p> } 
             { this.props.humidity && <p className = 'info_key'> Humidity :
                <span className = 'info_value'> {this.props.humidity}%  </span> </p> } 
             { this.props.description && <p className = 'info_key'> Description :
                <span className = 'info_value'> {this.props.description}  </span> </p> } 
             { this.props.error && <p className = 'info_key'> Error :
                <span className = 'info_value'> {this.props.error}  </span> </p> } 
           
        </React.Fragment> );
    }
}
 
export default Weather;