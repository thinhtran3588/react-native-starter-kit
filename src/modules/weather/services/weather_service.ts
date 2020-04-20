import {config} from '@core/config';
import {WeatherData, GetDailyWeatherForecastJsonResult, GetDailyWeatherForecastParams} from '@weather/interfaces';

const getDailyWeatherForecast = async (params: GetDailyWeatherForecastParams): Promise<WeatherData[]> => {
  const {long, lat, unit = 'celsius', lang = 'vi'} = params;
  const url =
    `https://api.openweathermap.org/data/2.5/onecall?` +
    `lat=${lat}&lon=${long}&units=${unit}&lang=${lang}&appid=${config.weather.apiKey}`;
  const fetchResult = await fetch(url);
  const jsonResult: GetDailyWeatherForecastJsonResult = await fetchResult.json();
  const result: WeatherData[] = jsonResult.daily.map((w) => ({
    date: w.dt,
    status: w.weather[0].main,
    description: w.weather[0].description,
    humidity: w.humidity,
    temperature: {
      min: Math.floor(w.temp.min),
      max: Math.floor(w.temp.max),
      current: 0,
    },
    icon: w.weather[0].icon,
  }));

  // update current weather
  if (result.length > 0) {
    result[0].humidity = jsonResult.current.humidity;
    result[0].temperature.current = Math.floor(jsonResult.current.temp);
    result[0].status = jsonResult.current.weather[0].main;
    result[0].description = jsonResult.current.weather[0].description;
    result[0].icon = jsonResult.current.weather[0].icon;
  }
  return result;
};

export const weatherService = {getDailyWeatherForecast};
