import React, { Component } from 'react';


const Form =(props)=> {
        return ( <React.Fragment>
            <form onSubmit={props.getweather}>
                <input name='city' type='text' placeholder='City...' />
                <input name='country' type='text' placeholder='Country...' />
                { props.invalid_info &&  <span className = 'info_value'> invalid city or country  </span> } <br/> 
                <button>Get Weather</button>
            </form>
        </React.Fragment> );
    
}
 
export default Form;