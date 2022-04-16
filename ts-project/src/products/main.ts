import { createProduct, calculateStock, products } from './product.service';

createProduct({
    name: 'Shirt',
    createdAt: new Date(2001, 1, 1),
    stock: 10
});

createProduct({
    name: 'Shirt',
    createdAt: new Date(2001, 1, 1),
    stock: 10,
    size: 'L'
});

console.log(products);
const totalStock = calculateStock();
console.log(totalStock);
