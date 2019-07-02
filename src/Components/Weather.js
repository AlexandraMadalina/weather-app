import React from 'react'

 const Weather = props =>
  
       (    
           
            <div className="row rounded-lg border border-success">
                {props.city && props.country &&
                <div className="col">
                   <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=""/>
                  </div>
                }
                

            {
                props.city && props.country && props.temperature &&
                <div className="col">
                <p className="weather__key"> 
                    <span className="weather__value"> {props.city}, {props.country} </span>
                    </p>
                    <p className="weather__key"> 
                    <span className="weather__value"> {props.temperature}</span>
                    </p>
                    </div> 
                }
          
            {
                props.humidity && props.description && props.pressure && props.wind &&
                <div className="col">
                <p className="weather__key">Atmospheric Pressure: 
                    <span className="weather__value"> {props.pressure} pa</span>

                </p>
                <p className="weather__key">Humidity: 
                    <span className="weather__value"> {props.humidity}</span>

                </p>
                <p className="weather__key">Wind: 
                    <span className="weather__value"> {props.wind} m/s</span>

                </p>
                <p className="weather__key">Conditions: 
                    <span className="weather__value"> {props.description}</span>
                    </p>
                </div>
               
                }
           
            {
                props.error && <p className="weather__key"> {props.error}</p>
                }    
            </div>
       
            
       
            
        );


export default Weather;
