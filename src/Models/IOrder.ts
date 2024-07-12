import {Sneaker} from "./Sneaker";

export interface IOrder {
  id: number;
  items: Sneaker[]
}