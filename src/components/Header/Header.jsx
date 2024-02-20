import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      Weather <span className={s.bold}>Forecast</span>
    </div>
  );
};

export default Header;
