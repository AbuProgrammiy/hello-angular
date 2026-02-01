import { Car } from "./car.model";

export interface CarResponse {
  isSuccess: boolean;
  status: number;
  response: Car[];
}
