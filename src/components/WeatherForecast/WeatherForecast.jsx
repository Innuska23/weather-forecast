import { useState } from "react";
import { useSelector } from "react-redux";

import WeatherForecastSearch from "./WeatherForecastSearch/WeatherForecastSearch";
import WeatherForecastList from "./WeatherForecastList/WeatherForecastList";
import { WeatherForecastTrip } from "./WeatherForecastTrip/WeatherForecastTrip";
import { selectTrips } from "../../redux/selectors/tripActions";

const WeatherForecast = () => {
  const [searchParam, setSearchParam] = useState("");
  const trips = useSelector((state) => selectTrips(state, searchParam));

  const handleSearch = (searchParam) => {
    setSearchParam(searchParam);
  };

  return (
    <div>
      <WeatherForecastSearch onSearch={handleSearch} />
      <WeatherForecastList tripList={trips} />
      <WeatherForecastTrip />
    </div>
  );
};

export default WeatherForecast;
