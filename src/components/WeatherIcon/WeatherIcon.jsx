import clearDay from "../../assets/weatherIcons/clear-day.svg";
import clearNight from "../../assets/weatherIcons/clear-night.svg";
import Cloudy from "../../assets/weatherIcons/cloudy.svg";
import Fog from "../../assets/weatherIcons/fog.svg";
import Hail from "../../assets/weatherIcons/hail.svg";
import PartlyCloudyDay from "../../assets/weatherIcons/partly-cloudy-day.svg";
import PartlyCloudyNight from "../../assets/weatherIcons/partly-cloudy-night.svg";
import RainSnowShowersDay from "../../assets/weatherIcons/rain-snow-showers-day.svg";
import RainSnowShowersNight from "../../assets/weatherIcons/rain-snow-showers-night.svg";
import RainSnow from "../../assets/weatherIcons/rain-snow.svg";
import Rain from "../../assets/weatherIcons/rain.svg";
import ShowersDay from "../../assets/weatherIcons/showers-day.svg";
import ShowersNight from "../../assets/weatherIcons/showers-night.svg";
import Sleet from "../../assets/weatherIcons/sleet.svg";
import SnowShowersDay from "../../assets/weatherIcons/snow-showers-day.svg";
import SnowShowersNight from "../../assets/weatherIcons/snow-showers-night.svg";
import Snow from "../../assets/weatherIcons/snow.svg";
import ThunderRain from "../../assets/weatherIcons/thunder-rain.svg";
import ThunderShowersDay from "../../assets/weatherIcons/thunder-showers-day.svg";
import ThunderShowersNight from "../../assets/weatherIcons/thunder-showers-night.svg";
import Thunder from "../../assets/weatherIcons/thunder.svg";
import Wind from "../../assets/weatherIcons/wind.svg";

const weatherIcons = {
  ["clear-day"]: clearDay,
  ["clear-night"]: clearNight,
  ["cloudy"]: Cloudy,
  ["fog"]: Fog,
  ["hail"]: Hail,
  ["partly-cloudy-day"]: PartlyCloudyDay,
  ["partly-cloudy-night"]: PartlyCloudyNight,
  ["rain-snow-showers-day"]: RainSnowShowersDay,
  ["rain-snow-showers-night"]: RainSnowShowersNight,
  ["rain-snow"]: RainSnow,
  ["rain"]: Rain,
  ["showers-day"]: ShowersDay,
  ["showers-night"]: ShowersNight,
  ["sleet"]: Sleet,
  ["snow-showers-day"]: SnowShowersDay,
  ["snow-showers-night"]: SnowShowersNight,
  ["snow"]: Snow,
  ["thunder-rain"]: ThunderRain,
  ["thunder-showers-day"]: ThunderShowersDay,
  ["thunder-showers-night"]: ThunderShowersNight,
  ["thunder"]: Thunder,
  ["wind"]: Wind,
};

const WeatherIcon = ({ weather }) => {
  return <img src={weatherIcons[weather]} alt="" />;
};

export default WeatherIcon;
