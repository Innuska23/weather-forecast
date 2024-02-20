import { useRef, useState } from "react";

import s from "./WeatherForecastModalForm.module.css";
import CitySelector from "../../CitySelector/CitySelector";
import { formatDate, getDateWithOffsetDay } from "../../../utils/date";

const WeatherForecastModalForm = ({ onSubmit, formId }) => {
  const formRef = useRef();
  const [startDate, setStartDate] = useState();
  const minDate = getDateWithOffsetDay(1);
  const maxDate = getDateWithOffsetDay(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = {};

    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    onSubmit(formValues);
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
  };

  return (
    <form
      className={s.wrapperForm}
      onSubmit={handleSubmit}
      id={formId}
      ref={formRef}
    >
      <div className={s.formGroup}>
        <div className={s.formList}>
          <label htmlFor="selectedCity" className={s.formLabel}>
            City
          </label>
          <CitySelector name="destination" required />
        </div>

        <div className={s.formList}>
          <label htmlFor="startDate" className={s.formLabel}>
            Start date
          </label>
          <input
            name="startDate"
            className={s.formInput}
            type="date"
            value={startDate}
            min={formatDate(minDate)}
            max={formatDate(maxDate)}
            onChange={handleStartDateChange}
            required
          />
        </div>

        <div className={s.formList}>
          <label htmlFor="endDate" className={s.formLabel}>
            End date
          </label>
          <input
            name="endDate"
            className={s.formInput}
            type="date"
            min={formatDate(startDate || minDate)}
            max={formatDate(maxDate)}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default WeatherForecastModalForm;
