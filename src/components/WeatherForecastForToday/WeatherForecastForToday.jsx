import { useSelector } from "react-redux";

import { selectedTrip } from "../../redux/selectors/tripActions";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useWeatherForecastTodayByCityQuery } from "../../redux/api/weatherApi";
import { getDayName } from "../../utils/date";
import DayCounterDown from "../DayCounterDown/DayCounterDown";
import s from "./WeatherForecastForToday.module.css";

const WeatherForecastForToday = () => {
  const selectTrip = useSelector(selectedTrip);
  const { data, isFetching } = useWeatherForecastTodayByCityQuery(selectTrip, {
    skip: !selectTrip,
  });

  const todayWeather = data?.days[0];
  if (isFetching) return <p>Loading...</p>;

  if (!todayWeather) return;

  return (
    <div className={s.weatherContainer}>
      <p className={s.weatherListItem}>{getDayName(todayWeather.datetime)}</p>

      <div className={s.weatherToday}>
        <WeatherIcon weather={todayWeather.icon} />
        {todayWeather.temp}&deg;
      </div>

      <div>{selectTrip.destination}</div>

      <WeatherIcon className={s.bgIcon1} weather={todayWeather.icon} />
      <WeatherIcon className={s.bgIcon2} weather={todayWeather.icon} />
      <WeatherIcon className={s.bgIcon3} weather={todayWeather.icon} />
      <WeatherIcon className={s.bgIcon4} weather={todayWeather.icon} />

      <DayCounterDown destinationDate={selectTrip.startDate} />
    </div>
  );
};

export default WeatherForecastForToday;
