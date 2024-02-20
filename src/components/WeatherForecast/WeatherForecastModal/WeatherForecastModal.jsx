import { useId } from "react";
import WeatherForecastModalForm from "./WeatherForecastModalForm";
import s from "./WeatherForecastModalForm.module.css";
import { useDispatch } from "react-redux";
import { addTrip } from "../../../redux/redusers/tripReducer";
import { useLazyCityImagesQuery } from "../../../redux/api/imageApi";
import { nanoid } from "@reduxjs/toolkit";

function WeatherForecastModal({ onCloseModal }) {
  const formId = useId();
  const dispatch = useDispatch();
  const [getCityImages] = useLazyCityImagesQuery();

  const handleSaveTrip = async (data) => {
    const cities = await getCityImages({
      destination: data.destination,
    }).unwrap();

    dispatch(
      addTrip({
        ...data,
        id: nanoid(),
        imageSrc: cities?.results[0].links.download,
      })
    );
    onCloseModal();
  };

  return (
    <div className={s.wrapperModal}>
      <div className={s.wrapperContent}>
        <div className={s.wrapperHeader}>
          Create trip{" "}
          <button className={s.closeButton} onClick={onCloseModal}>
            &#x2715;
          </button>
        </div>

        <WeatherForecastModalForm onSubmit={handleSaveTrip} formId={formId} />

        <div className={s.wrapperButtons}>
          <button className={s.button} type="button" onClick={onCloseModal}>
            Cancel
          </button>
          <button className={s.button} form={formId} type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastModal;
