(() => {
    let myDynamicVariable: any;
    myDynamicVariable = "Hello World";
    myDynamicVariable = true;
    myDynamicVariable = 10;
    myDynamicVariable = {};
    myDynamicVariable = [];
    myDynamicVariable = () => { };
    myDynamicVariable = null;
    myDynamicVariable = undefined;

    myDynamicVariable = 'Hello';
    const rta = (myDynamicVariable as string).toLowerCase();
    console.log(rta);

    myDynamicVariable = 1212;
    const rta2 = (<number>myDynamicVariable).toFixed();
    console.log(rta2);
})()
