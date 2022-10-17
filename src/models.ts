export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
        rate: number
        count: number
    }
    custom?: boolean
}

export interface IItemCount {
    value: string,
    count: number
}