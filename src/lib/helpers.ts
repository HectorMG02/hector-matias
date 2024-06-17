export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeSpain(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Spain's time
  const offsetSpain = 1; // Spain is in Central European Time (UTC+1), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetSpain);

  return now;
}
 

export const formatTimeForSpain = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Cambiado a formato de 24 horas
    timeZone: "Europe/Madrid",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  formattedTime += " CEST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
