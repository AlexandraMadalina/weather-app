import React from 'react'

 const Form = props => 
     (
        <div >
            <form 
            className="input-group"
            onSubmit={props.getWeather}
            >
                <input  className="form-control" type="text" name="city" placeholder="City..."/>
                <input className="form-control" type="text" name="country" placeholder="Country..."/>
                <div className="input-group-prepend">
                <button className="btn btn-outline-secondary">Get weather</button>
                </div>
               
            </form>
        </div>
          
        )
    
     
export default Form;