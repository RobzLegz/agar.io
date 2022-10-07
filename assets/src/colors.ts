import { genRandBetween } from './utils/genRandBetween';

export const colors = [
    '#FFFE34',
    '#F9BC02',
    '#FD5309',
    '#FD5309',
    '#FF2713',
    '#FFFFFF',
    '#8601B0',
    '#3E02A6',
    '#0246FF',
    '#0493CD',
    '#0491C8',
    '#CFE92A',
];

export const getColor = () => {
    const colorIndex = genRandBetween(0, colors.length - 1);

    return colors[colorIndex];
};
