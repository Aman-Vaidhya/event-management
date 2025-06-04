import { parseISO, isToday, isAfter, isBefore } from "date-fns";

export const categorizeEvents = (events) => {
  const today = new Date();

  const categorized = {
    today: [],
    future: [],
    past: [],
  };

  events.forEach(event => {
    const eventDate = parseISO(event.date);
    if (isToday(eventDate)) categorized.today.push(event);
    else if (isAfter(eventDate, today)) categorized.future.push(event);
    else if (isBefore(eventDate, today)) categorized.past.push(event);
  });

  return categorized;
};
