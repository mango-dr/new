import { Coffee } from "./coffee";

export interface FavItem {
id: number;
name: string;
coffee: Coffee;
price: number;
count: number;
}