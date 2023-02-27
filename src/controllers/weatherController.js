exports.weather_forecast = function (req, res) {
  let weather = [
    {
      temp: 90.5,
      unit: 'fahrenheit',
      cloudy: false,
      precipitationChance: 0
    },
  ];

  res.send(weather);
};