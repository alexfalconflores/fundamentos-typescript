(() => {
    type Sizes = 'S' | 'M' | 'L';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const products: Product[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: 'Shirt',
        createdAt: new Date(2001, 1, 1),
        stock: 10
    });
    addProduct({
        title: 'Shirt',
        createdAt: new Date(2001, 1, 1),
        stock: 10,
        size: 'L'
    });

    console.log(products);
})()
