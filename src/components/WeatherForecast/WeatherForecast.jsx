import WeatherForecastSearch from "./WeatherForecastSearch/WeatherForecastSearch";
import WeatherForecastList from "./WeatherForecastList/WeatherForecastList";
import { WeatherForecastTrip } from "./WeatherForecastTrip/WeatherForecastTrip";

const WeatherForecast = () => {
  return (
    <div>
      <WeatherForecastSearch />
      <WeatherForecastList />
      <WeatherForecastTrip />
    </div>
  );
};

export default WeatherForecast;
