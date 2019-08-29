## Weather app

This is a class exercise created by our coaches [Thijs Lambert](https://github.com/Thijs-Lambert) and [Kevin](https://github.com/keloriane)

I followed this exercises during my training as JuniorWeb Developer at BeCode in jun 2019.

## Description

In the Weather app you can get the weather for the current day and 5 day forecast. For this exercise I use the API from [OpenWeather](https://openweathermap.org/);

## My approach

The Form component is used to get the user input about the city and country. Once the form is submited the `getWeather` function will request the forecast for 5 days with data every 3 hours, then the data is distibuted to the Weather component and Form component.
The Weather component is used to display informations about the current weather. The data received is filtered and then Forecast component is used to display the forecast for the next 5 days at 09:00 o'clock.

### Results

You can see the results [here](http://AlexandraMadalina.github.io/weather-app)
