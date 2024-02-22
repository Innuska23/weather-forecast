import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";
import { WeatherForecastNew } from "../WeatherForecastNew/WeatherForecastNew";

import s from "./WeatherForecastList.module.css";

const WeatherForecastList = ({ tripList }) => {
  return (
    <div className={s.list}>
      {tripList.map((trip, index) => (
        <WeatherForecastItem key={index} trip={trip} />
      ))}

      <WeatherForecastNew />
    </div>
  );
};

export default WeatherForecastList;
