import { useSelector } from "react-redux";

import { selectedTrip } from "../../../redux/selectors/tripActions";
import { useWeatherListQuery } from "../../../redux/api/weatherApi";
import { getWeekDays } from "../../../utils/date";

import s from "./WeatherForecastTrip.module.css";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";

export const WeatherForecastTrip = () => {
  const selectedTr = useSelector(selectedTrip);
  const { data, isFetching } = useWeatherListQuery(selectedTr, {
    skip: !selectedTr,
  });

  if (isFetching) return <p>Loading...</p>;
  if (!selectedTr) return null;

  return (
    <div>
      <p className={s.weatherText}>Week</p>

      <ul className={s.weatherWrapper}>
        {data?.days?.map((item, index) => (
          <li key={index}>
            {getWeekDays(item.datetime)}
            <WeatherIcon weather={item.icon} />
            <div className={s.temperature}>
              {item.tempmax}&deg;/{item.tempmin}&deg;
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
