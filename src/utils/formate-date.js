import dayjs from "dayjs";

export function formatMouthDate(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(dayjs(startDate), "day")
}
