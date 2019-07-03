import React from "react";

export default function Day(props) {
  const { date, icon, temp } = props;
  return (
    <div className="col text-center">
      <p>{date}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{temp}C&deg;</p>
    </div>
  );
}
