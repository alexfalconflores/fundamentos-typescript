type Sizes = 'S' | 'M' | 'L';
type Product = {
    name: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
}


export { Sizes, Product };
