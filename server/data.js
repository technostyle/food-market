const { now } = require("lodash")

const products = [
    {
        id: 1,
        image: 'image',
        name: 'product 1',
        price: 299,
    },
    {
        id: 2,
        image: 'image',
        name: 'product 2',
        price: 349,
    },
    {
        id: 3,
        image: 'image',
        name: 'product 3',
        price: 159,
    },
    {
        id: 229,
        image: 'image',
        name: 'product 4',
        price: 69,
    },
]

// const power = (array, count) => count ? multiply(array.concat(array), --count) : array;
const multiply = (array, count) => {
    let adjoint = []
    while (--count) {
        adjoint = adjoint.concat(array)
    }
    return adjoint
}

// const poweredProducts = power(products, 4);
const multipliedProducts = multiply(products, 4)

module.exports.products = multipliedProducts.map((product, index) => ({...product, id: index}));