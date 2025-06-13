import dayjs from "dayjs";

export function formatMouthDate(date) {
  return dayjs(date).format("MM月DD日")
}