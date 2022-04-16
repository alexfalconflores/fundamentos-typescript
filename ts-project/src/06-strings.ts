(() => {
    let productTitle = 'my amazing product';
    productTitle = 'my amazing product changed';
    console.log('productTitle', productTitle);

    const productDescription = "my amazing product description";
    console.log('productDescription', productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;
    console.log('summary', summary);
    const myString: string = '';
})()
