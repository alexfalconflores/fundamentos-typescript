(() => {
    const calculateTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach(item => {
            total += item;
        });
        return total.toString();
    }

    const printTotal = (prices: number[]) : void => {
        const total = calculateTotal(prices);
        console.log(`The total is ${total}`);
    }

    printTotal([1, 2, 3, 4, 5, 1, 2]);
})()
