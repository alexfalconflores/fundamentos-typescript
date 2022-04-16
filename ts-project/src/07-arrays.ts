(() => {
    let prices = [10, 20, 30, 40, 50, 'hello', true];
    prices.push(60);
    prices = [1, 2, 3, 4, 5];

    let products = ['Hello', true];
    products.push('World');
    products.push(false);

    const mixed: (string | number | boolean | Object)[] = ['Hello', true];
    mixed.push(10);
    mixed.push({});
    mixed.push(false);
    mixed.push('World');
    mixed.push([]);

    let numbers = [1, 2, 3, 4, 5];
    numbers.map(item => item * 2);
})()
