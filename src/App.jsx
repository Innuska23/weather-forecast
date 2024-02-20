import "./App.css";
import Header from "./components/Header/Header";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import WeatherForecastForToday from "./components/WeatherForecastForToday/WeatherForecastForToday";

function App() {
  return (
    <div className="wrapper-container">
      <div className="wrapper-forCast">
        <Header />
        <WeatherForecast />
      </div>

      <div className="wrapper-forToday">
        <WeatherForecastForToday />
      </div>
    </div>
  );
}

export default App;
