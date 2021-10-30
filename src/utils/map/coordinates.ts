export const convertToDegrees = (decimal: number): [number, number, number] => {
  const d = Math.floor(decimal);
  const mAndS = (decimal - d) * 60;
  const m = Math.floor(mAndS);
  const s = Math.floor((mAndS - m) * 60);

  return [d, m, s];
};

export const printDegrees = ([d, m, s]: [number, number, number]) => {
  return `${d}° ${m}' ${s}"`;
};
