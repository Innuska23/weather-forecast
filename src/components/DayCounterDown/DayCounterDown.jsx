import { useEffect, useRef, useState } from "react";

import { getDateDifference } from "../../utils/date";
import s from "./DayCounterDown.module.css";

const DayCounterDown = ({ destinationDate }) => {
  const intervalIdRef = useRef();
  const [{ days, hours, minutes, seconds }, setCounterValues] = useState(
    getDateDifference(new Date(), new Date(destinationDate))
  );

  useEffect(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(
      () =>
        setCounterValues(
          getDateDifference(new Date(), new Date(destinationDate))
        ),
      1000
    );

    return () => clearInterval(intervalIdRef.current);
  }, [destinationDate]);

  const counterList = [
    { name: "Days", value: days },
    { name: "Hours", value: hours },
    { name: "Minutes", value: minutes },
    { name: "Seconds", value: seconds },
  ];

  return (
    <ul className={s.counterList}>
      {counterList.map(({ name, value }) => (
        <li key={name} className={s.counterListItem}>
          <span>{value}</span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default DayCounterDown;
