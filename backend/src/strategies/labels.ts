export function getLabel(co2: number): 'GREEN' | 'ORANGE' | 'RED' {
  if (co2 < 5)  return 'GREEN';
  if (co2 < 15) return 'ORANGE';
  return 'RED';
}