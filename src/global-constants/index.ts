export type Id = Number

export interface Product {
    id: Id
    image: String
    name: String
    price: Number
}

export interface Catalog {
    id: Id
    image: String
    name: String
    children: Array<Catalog> | null
}
