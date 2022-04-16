(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;

    let myNull: null;
    let myUndefined: undefined;

    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'ABC';

    function hi(name: string | null) {
        let hello = 'Hello ';
        if (name) {
            hello += name;
        } else {
            hello += 'No name';
        }
        console.log(hello);
    }

    function hiV2(name: string | null) {
        let hello = 'Hello ';
        hello += name?.toLowerCase() || 'No name';
        console.log(hello);
    }

    hi('Alex');
    hi(null);
    hiV2('Stefano');
    hiV2(null);
})()
