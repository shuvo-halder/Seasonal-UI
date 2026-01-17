
import { SeasonType, SeasonConfig } from './types';

export const SEASONS: Record<SeasonType, SeasonConfig> = {
  [SeasonType.SUMMER]: {
    type: SeasonType.SUMMER,
    name: 'Summer',
    bengaliName: 'গ্রীষ্ম',
    months: ['March', 'April', 'May'],
    themeColor: '#FF9F1C',
    skyGradient: 'from-orange-200 to-yellow-100',
    nightSkyGradient: 'from-slate-900 to-orange-950',
    tree: {
      leafColor: '#7CB342',
      trunkColor: '#5D4037',
      hasLeaves: true,
      leafCount: 40,
      hasFlowers: false,
      isDry: true
    },
    weather: 'sunny'
  },
  [SeasonType.RAINY]: {
    type: SeasonType.RAINY,
    name: 'Monsoon',
    bengaliName: 'বর্ষা',
    months: ['June', 'July', 'August', 'September'],
    themeColor: '#0077B6',
    skyGradient: 'from-slate-400 to-blue-300',
    nightSkyGradient: 'from-black to-blue-900',
    tree: {
      leafColor: '#1B5E20',
      trunkColor: '#3E2723',
      hasLeaves: true,
      leafCount: 60,
      hasFlowers: false
    },
    weather: 'rain'
  },
  [SeasonType.AUTUMN]: {
    type: SeasonType.AUTUMN,
    name: 'Autumn',
    bengaliName: 'শরৎ',
    months: ['October'],
    themeColor: '#48CAE4',
    skyGradient: 'from-sky-300 to-white',
    nightSkyGradient: 'from-slate-900 to-indigo-900',
    tree: {
      leafColor: '#9CCC65',
      trunkColor: '#5D4037',
      hasLeaves: true,
      leafCount: 45,
      hasFlowers: true,
      flowerColor: '#FFFFFF'
    },
    weather: 'clear'
  },
  [SeasonType.LATE_AUTUMN]: {
    type: SeasonType.LATE_AUTUMN,
    name: 'Late Autumn',
    bengaliName: 'হেমন্ত',
    months: ['November'],
    themeColor: '#FB8500',
    skyGradient: 'from-orange-300 to-amber-100',
    nightSkyGradient: 'from-zinc-900 to-orange-900',
    tree: {
      leafColor: '#E65100',
      trunkColor: '#4E342E',
      hasLeaves: true,
      leafCount: 30,
      hasFlowers: false
    },
    weather: 'wind'
  },
  [SeasonType.WINTER]: {
    type: SeasonType.WINTER,
    name: 'Winter',
    bengaliName: 'শীত',
    months: ['December', 'January'],
    themeColor: '#ADE8F4',
    skyGradient: 'from-blue-100 to-slate-200',
    nightSkyGradient: 'from-black to-slate-800',
    tree: {
      leafColor: '#B0BEC5',
      trunkColor: '#37474F',
      hasLeaves: false,
      leafCount: 0,
      hasFlowers: false
    },
    weather: 'snow'
  },
  [SeasonType.SPRING]: {
    type: SeasonType.SPRING,
    name: 'Spring',
    bengaliName: 'বসন্ত',
    months: ['February'],
    themeColor: '#FFB703',
    skyGradient: 'from-green-100 to-blue-100',
    nightSkyGradient: 'from-slate-900 to-emerald-950',
    tree: {
      leafColor: '#8BC34A',
      trunkColor: '#5D4037',
      hasLeaves: true,
      leafCount: 50,
      hasFlowers: true,
      flowerColor: '#FF4081'
    },
    weather: 'wind'
  }
};
