import { useDispatch, useSelector } from "react-redux";

import s from "./WeatherForecastItem.module.css";
import { selectedTrip } from "../../../redux/selectors/tripActions";
import { selectTrip } from "../../../redux/redusers/tripReducer";

const WeatherForecastItem = ({ trip }) => {
  const selected = useSelector(selectedTrip);
  const dispatch = useDispatch();

  const handleSelectTrip = () => {
    dispatch(selectTrip(trip));
  };

  return (
    <li className={s.itemList} onClick={handleSelectTrip}>
      <div className={s.imageWrapper}>
        <img src={trip.imageSrc} />
      </div>

      <div
        className={`${s.tripCard} ${
          selected && selected.id === trip.id ? s.tripCardActive : ""
        }`}
      >
        <div>{trip.destination}</div>
        <div>
          {trip.startDate} - {trip.endDate}
        </div>
      </div>
    </li>
  );
};

export default WeatherForecastItem;
