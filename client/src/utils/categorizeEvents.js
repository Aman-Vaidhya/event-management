import { parseISO, isToday, isAfter, isBefore } from "date-fns";

export const categorizeEvents = (events) => {
    const today = new Date();
    const todayArr = [];
    const futureArr = [];
    const pastArr = [];

    events.forEach((event) => {
      const eventDate = parseISO(event.date);
      if (isToday(eventDate)) todayArr.push(event);
      else if (isAfter(eventDate, today)) futureArr.push(event);
      else if (isBefore(eventDate, today)) pastArr.push(event);
    });

    return { today: todayArr, future: futureArr, past: pastArr };
  };