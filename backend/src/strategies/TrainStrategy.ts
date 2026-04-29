import { TransportStrategy } from './TransportStrategy';
import { TripInput, TripResult } from '../types';
import { getLabel } from './labels';

const EMISSION_FACTORS: Record<string, number> = {
  France:  0.0032,
  Germany: 0.032,
  Poland:  0.069,
  Norway:  0.001,
  default: 0.041,
};

export class TrainStrategy implements TransportStrategy {
  calculate({ distance, country = '' }: TripInput): TripResult {
    const factor = EMISSION_FACTORS[country] ?? EMISSION_FACTORS.default;
    const co2 = distance * factor;
    return { co2, label: getLabel(co2) };
  }
}