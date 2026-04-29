import { TransportStrategy } from './TransportStrategy';
import { TripInput, TripResult } from '../types';
import { getLabel } from './labels';

const THERMAL_FACTOR = 0.192;
const HYBRID_FACTOR  = 0.098;

const ELECTRIC_FACTORS: Record<string, number> = {
  France:  0.012,
  Germany: 0.045,
  Poland:  0.078,
  default: 0.040,
};

export class CarStrategy implements TransportStrategy {
  calculate({ distance, carType = 'thermal', passengers = 1, country = '' }: TripInput): TripResult {
    const rawCo2 = this.computeRawEmission(distance, carType, country);
    const co2 = passengers > 0 ? rawCo2 / passengers : rawCo2;
    return { co2, label: getLabel(co2) };
  }

  private computeRawEmission(distance: number, carType: string, country: string): number {
    switch (carType) {
      case 'thermal': return distance * THERMAL_FACTOR;
      case 'hybrid':  return distance * HYBRID_FACTOR;
      case 'electric': {
        const factor = ELECTRIC_FACTORS[country] ?? ELECTRIC_FACTORS.default;
        return distance * factor;
      }
      default: return 0;
    }
  }
}