import { Product } from "./product.module";

const products: Product[] = [];

const createProduct = (data: Product) => {
    products.push(data);
}

const calculateStock = (): number => {
    return products.reduce((accumulate, item) => {
        return accumulate + item.stock;
    }, 0);
}

export { products, createProduct, calculateStock };
