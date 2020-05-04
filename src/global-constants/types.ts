export type Id = number

export interface Product {
    id: Id
    image: string
    name: string
    price: number
    quantity?: number
}

export interface Catalog {
    id: Id
    image: string
    name: string
    children: Array<Catalog> | null
}
