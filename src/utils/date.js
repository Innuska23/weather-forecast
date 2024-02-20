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
