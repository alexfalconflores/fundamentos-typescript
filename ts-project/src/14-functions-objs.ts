(() => {
    const login = (data: { email: string, password: number }) => {
        console.log(data.email, data.password);
    }

    // login('alex@alex.com','123456');
    login({
        email: 'alex@alex.com',
        password: 123456
    });

    type Sizes = 'S' | 'M' | 'L';
    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
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
