export default interface Sneaker {
    id: number,
    sneakerId: number,
    name: string,
    price: number,
    imgURL: string
}

export function isEqual(sneaker1: Sneaker, sneaker2: Sneaker): boolean {
    return sneaker2.name === sneaker1.name && sneaker2.imgURL === sneaker1.imgURL && sneaker2.price === sneaker1.price
}
