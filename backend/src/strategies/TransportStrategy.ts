import { TripInput, TripResult } from '../types';

export interface TransportStrategy {
  calculate(input: TripInput): TripResult;
}