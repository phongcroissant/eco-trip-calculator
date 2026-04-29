// CalculatorService.ts
import { TransportStrategy } from './strategies/TransportStrategy';
import { GreenTransportStrategy } from './strategies/GreenTransportStrategy';
import { BusStrategy }            from './strategies/BusStrategy';
import { TrainStrategy }          from './strategies/TrainStrategy';
import { CarStrategy }            from './strategies/CarStrategy';
import { TripInput, TripResult }  from './types';

type TransportType = 'bike' | 'walk' | 'bus' | 'train' | 'car';

const STRATEGIES: Record<TransportType, TransportStrategy> = {
  bike:  new GreenTransportStrategy(),
  walk:  new GreenTransportStrategy(),
  bus:   new BusStrategy(),
  train: new TrainStrategy(),
  car:   new CarStrategy(),
};

class CalculatorService {
  calculate(type: TransportType, input: TripInput): TripResult {
    const strategy = STRATEGIES[type];
    if (!strategy) {
      throw new Error(`Unknown transport type: ${type}`);
    }
    return strategy.calculate(input);
  }
}

export default new CalculatorService();