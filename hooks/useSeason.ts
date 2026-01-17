
import { useState, useEffect } from 'react';
import { SeasonType, SeasonConfig } from '../types';
import { SEASONS } from '../constants';

export const useSeason = () => {
  const [currentSeason, setCurrentSeason] = useState<SeasonConfig>(SEASONS[SeasonType.SPRING]);
  const [manualMonth, setManualMonth] = useState<number | null>(null);

  useEffect(() => {
    const getSeasonFromMonth = (month: number): SeasonConfig => {
      // month is 0-indexed (0 = Jan, 11 = Dec)
      if (month === 11 || month === 0) return SEASONS[SeasonType.WINTER];
      if (month === 1) return SEASONS[SeasonType.SPRING];
      if (month >= 2 && month <= 4) return SEASONS[SeasonType.SUMMER];
      if (month >= 5 && month <= 8) return SEASONS[SeasonType.RAINY];
      if (month === 9) return SEASONS[SeasonType.AUTUMN];
      if (month === 10) return SEASONS[SeasonType.LATE_AUTUMN];
      return SEASONS[SeasonType.SPRING];
    };

    const targetMonth = manualMonth !== null ? manualMonth : new Date().getMonth();
    setCurrentSeason(getSeasonFromMonth(targetMonth));
  }, [manualMonth]);

  return { currentSeason, setManualMonth, currentMonthIndex: manualMonth !== null ? manualMonth : new Date().getMonth() };
};
