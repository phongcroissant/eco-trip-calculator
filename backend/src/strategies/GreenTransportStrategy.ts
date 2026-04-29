import { TransportStrategy } from './TransportStrategy';
import { TripResult } from '../types';

export class GreenTransportStrategy implements TransportStrategy {
  calculate(): TripResult {
    return { co2: 0, label: 'GREEN' };
  }
}