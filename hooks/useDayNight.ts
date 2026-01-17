
import { useState, useEffect } from 'react';

export const useDayNight = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const checkDayNight = () => {
      const hour = new Date().getHours();
      // Night is from 7 PM (19) to 6 AM (6)
      setIsNight(hour >= 19 || hour < 6);
    };

    checkDayNight();
    const interval = setInterval(checkDayNight, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return { isNight };
};
