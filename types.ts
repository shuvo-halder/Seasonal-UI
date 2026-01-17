
export enum SeasonType {
  SUMMER = 'Summer',
  RAINY = 'Rainy',
  AUTUMN = 'Autumn',
  LATE_AUTUMN = 'Late Autumn',
  WINTER = 'Winter',
  SPRING = 'Spring'
}

export interface SeasonConfig {
  type: SeasonType;
  name: string;
  bengaliName: string;
  months: string[];
  themeColor: string;
  skyGradient: string;
  nightSkyGradient: string;
  tree: {
    leafColor: string;
    trunkColor: string;
    hasLeaves: boolean;
    leafCount: number;
    hasFlowers: boolean;
    flowerColor?: string;
    isDry?: boolean;
  };
  weather: 'sunny' | 'rain' | 'wind' | 'snow' | 'clear';
}
