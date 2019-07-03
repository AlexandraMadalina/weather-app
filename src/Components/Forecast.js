import React, { Fragment } from "react";
import Day from "./Day";

const Forecast = props => {
  return (
    <Fragment>
      {props.forecast && (
        <div className="row rounded-lg border border-success">
          {props.forecast.map(day => (
            <Day
              key={day.date}
              icon={day.icon}
              temp={day.temp}
              date={day.date}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Forecast;
