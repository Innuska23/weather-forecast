import { useSelector } from "react-redux";

import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";
import { selectTrips } from "../../../redux/selectors/tripActions";
import { WeatherForecastNew } from "../WeatherForecastNew/WeatherForecastNew";

import s from "./WeatherForecastList.module.css";

const WeatherForecastList = () => {
  const tripList = useSelector(selectTrips);

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
