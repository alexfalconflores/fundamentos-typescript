import _ from 'lodash';

const data = [
    {
        username: 'alex',
        role: 'admin'
    },
    {
        username: 'bob',
        role: 'seller'
    },
    {
        username: 'carl',
        role: 'seller'
    },
    {
        username: 'dave',
        role: 'customer'
    }
];
const rta =  _.groupBy(data, (item) => item.role);
console.log(rta);
