import { useState } from "react";

import s from "./WeatherForecastSearch.module.css";
import SearchSvg from "../../../assets/search.svg";

const WeatherForecastSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={s.searchWrapper}>
      <label className={s.form}>
        <img src={SearchSvg} alt="Search" className={s.searchImg} />

        <input
          className={s.input}
          placeholder="Search your trip"
          autoComplete="off"
          type="text"
          name="name"
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
      </label>
    </div>
  );
};

export default WeatherForecastSearch;
