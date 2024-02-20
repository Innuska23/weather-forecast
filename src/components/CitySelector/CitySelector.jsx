import { useRef, useState } from "react";
import { useLazyCityListQuery } from "../../redux/api/cityApi";
import s from "./CitySelector.module.css";

const CitySelector = ({ onChange, value, ...rest }) => {
  const timeoutId = useRef(null);
  const [getCities, { data }] = useLazyCityListQuery();
  const [destination, setDestination] = useState(value || "");
  const [showList, setShowList] = useState(false);
  console.log("🚀 ~ CitySelector ~ showList:", showList);

  const handleSetCity = (destination) => () => {
    setDestination(destination);
    setShowList(false);
    onChange && onChange(destination);
  };

  const handleSearchChange = (e) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    setDestination(e.target.value);
    setShowList(false);

    if (e.target.value && destination != e.target.value) {
      timeoutId.current = setTimeout(async () => {
        await getCities({ text: e.target.value });
        setShowList(true);
      }, 500);
    }
  };

  return (
    <div className={s.cityContainer}>
      <input
        className={s.inputSelector}
        id="destination"
        placeholder="Please select a city"
        value={destination}
        onChange={handleSearchChange}
        {...rest}
      />

      {showList && (
        <ul className={s.list}>
          {data?.map((option, index) => (
            <li key={index}>
              <button onClick={handleSetCity(option?.primary?.text)}>
                {option?.primary?.text} {option?.secondary?.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySelector;
