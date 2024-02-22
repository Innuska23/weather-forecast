import { useId } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import WeatherForecastModalForm from "./WeatherForecastModalForm";
import { addTrip } from "../../../redux/redusers/tripReducer";
import { useLazyCityImagesQuery } from "../../../redux/api/imageApi";
import defaultImgSrc from "../../../assets/default.jpg";
import s from "./WeatherForecastModalForm.module.css";

function WeatherForecastModal({ onCloseModal }) {
  const formId = useId();
  const dispatch = useDispatch();
  const [getCityImages] = useLazyCityImagesQuery();

  const handleSaveTrip = async (data) => {
    let cityImageSrc;

    try {
      const cities = await getCityImages({
        destination: data.destination,
      }).unwrap();

      cityImageSrc = cities?.results[0].links.download;
    } catch (e) {
      cityImageSrc = defaultImgSrc;
    }

    dispatch(
      addTrip({
        ...data,
        id: nanoid(),
        imageSrc: cityImageSrc,
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
