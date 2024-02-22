export const getDateWithOffsetDay = (offsetDays) => {
  const day = new Date();
  const nextDay = new Date(day);

  return new Date(nextDay.setDate(day.getDate() + offsetDays));
};

export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0] || "";
};

export const getWeekDays = (date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, { weekday: "long" });
};

export const getDayName = (date) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", { weekday: "long" });
  return formattedDate;
};

export const getDateDifference = (startDate, endDate) => {
  const difference = endDate.getTime() - startDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: days >= 0 ? days : 0,
    hours: hours >= 0 ? hours : 0,
    minutes: minutes >= 0 ? minutes : 0,
    seconds: seconds >= 0 ? seconds : 0,
  };
};
