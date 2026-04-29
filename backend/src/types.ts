export interface TripInput {
  distance: number;
  passengers?: number;
  carType?: 'thermal' | 'electric' | 'hybrid';
  country?: string;
}

export interface TripResult {
  co2: number;
  label: 'GREEN' | 'ORANGE' | 'RED';
}