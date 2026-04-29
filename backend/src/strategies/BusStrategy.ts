import { TransportStrategy } from "./TransportStrategy";
import { TripInput, TripResult } from "../types";
import { getLabel } from "./labels";

const BUS_EMISSION_FACTOR = 0.104; // kgCO2/km

export class BusStrategy implements TransportStrategy {
  calculate({ distance }: TripInput): TripResult {
    const co2 = distance * BUS_EMISSION_FACTOR;
    return { co2, label: getLabel(co2) };
  }
}
