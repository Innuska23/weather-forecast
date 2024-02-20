import { useState } from "react";

import WeatherForecastModal from "../WeatherForecastModal/WeatherForecastModal";
import s from "./WeatherForecastNew.module.css";

export const WeatherForecastNew = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddNew = (value) => () => {
    setModalOpen(value);
  };

  return (
    <li>
      <button className={s.addButton} onClick={handleAddNew(true)}>
        <span>&#43;</span> Add Trip
      </button>

      {modalOpen && <WeatherForecastModal onCloseModal={handleAddNew(false)} />}
    </li>
  );
};
