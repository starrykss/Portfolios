export function getFormattedDate(date) {
  const dateStr = new Date(date);

  return dateStr?.toISOString().slice(0, 10); // YYYY-MM-DD
  // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
