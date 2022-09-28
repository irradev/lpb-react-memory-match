export const numberStringWithZero = (number: number): string =>
   number < 10 ? '0' + number : number.toString();
