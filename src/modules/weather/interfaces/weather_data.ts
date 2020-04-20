export interface WeatherData {
  date: number;
  humidity: number;
  temperature: {
    current: number;
    min: number;
    max: number;
  };
  status: string;
  description: string;
  icon: string;
}
