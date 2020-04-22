export interface GetDailyWeatherForecastParams {
  long: number;
  lat: number;
  unit?: string;
  lang?: string;
}

export interface GetDailyWeatherForecastJsonResult {
  current: {
    temp: number;
    humidity: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  };
  daily: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    humidity: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
  cod: number;
  message: string;
}
