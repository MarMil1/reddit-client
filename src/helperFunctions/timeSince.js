/**
 * It takes a date in seconds, converts it to milliseconds, subtracts it from the current time in
 * milliseconds, converts it back to seconds, and then converts it to years, months, days, hours,
 * minutes, or seconds depending on the value
 * @param date - The date you want to calculate the time since for.
 * @returns The time since the date passed in.
 */
export const timeSince = (date) => {
  const seconds = Math.floor(new Date().getTime() / 1000 - date);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
