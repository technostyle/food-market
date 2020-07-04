const products = [
    {
        id: 1,
        image: '/api/img/cabbage.jpg',
        name: 'Cabbage',
        price: 299,
        category: 'vegetables'
    },
    {
        id: 2,
        image: '/api/img/carrot.jpg',
        name: 'Carrot',
        price: 349,
        category: 'vegetables'
    },
    {
        id: 3,
        image: '/api/img/potato.jpg',
        name: 'Potato',
        price: 159,
        category: 'vegetables'
    },
    {
        id: 4,
        image: '/api/img/bete.jpg',
        name: 'Bete',
        price: 69,
        category: 'vegetables'
    },
    {
        id: 5,
        image: '/api/img/onion.jpg',
        name: 'Onion',
        price: 49,
        category: 'vegetables'
    },
    {
        id: 6,
        image: '/api/img/garlic.jpg',
        name: 'Garlic',
        price: 89,
        category: 'vegetables'
    },
    {
        id: 7,
        image: '/api/img/celery.jpg',
        name: 'Celery',
        price: 89,
        category: 'vegetables'
    },
    {
        id: 8,
        image: '/api/img/eggplant.jpg',
        name: 'Eggplant',
        price: 140,
        category: 'vegetables'
    },
    {
        id: 9,
        image: '/api/img/squash.jpg',
        name: 'Squash',
        price: 125,
        category: 'vegetables'
    },
    {
        id: 10,
        image: '/api/img/peas.jpg',
        name: 'Peas',
        price: 249,
        category: 'vegetables'
    },
    {
        id: 11,
        image: '/api/img/bean.jpg',
        name: 'Bean',
        price: 249,
        category: 'vegetables'
    },
    {
        id: 12,
        image: '/api/img/asparagus.jpg',
        name: 'Asparagus',
        price: 449,
        category: 'vegetables'
    },
    {
        id: 13,
        image: '/api/img/tomato.jpg',
        name: 'Tomato',
        price: 339,
        category: 'vegetables'
    },
    {
        id: 14,
        image: '/api/img/radish.jpg',
        name: 'Radish',
        price: 339,
        category: 'vegetables'
    },
    {
        id: 15,
        image: '/api/img/turnip.jpg',
        name: 'Turnip',
        price: 339,
        category: 'vegetables'
    },
    {
        id: 16,
        image: '/api/img/orange.jpg',
        name: 'Orange',
        price: 159,
        category: 'fruits'
    },
    {
        id: 17,
        image: '/api/img/apple.jpg',
        name: 'Apple',
        price: 89,
        category: 'fruits'
    },
    {
        id: 18,
        image: '/api/img/banana.jpg',
        name: 'Banana',
        price: 89,
        category: 'fruits'
    },
    {
        id: 19,
        image: '/api/img/mango.jpg',
        name: 'Mango',
        price: 289,
        category: 'fruits'
    },
    {
        id: 20,
        image: '/api/img/pineapple.jpg',
        name: 'Pineapple',
        price: 189,
        category: 'fruits'
    },
    {
        id: 21,
        image: '/api/img/avocado.jpg',
        name: 'Avocado',
        price: 149,
        category: 'vegetables'
    },
    {
        id: 22,
        image: '/api/img/grape.jpg',
        name: 'Grape',
        price: 169,
        category: 'fruits'
    },
    {
        id: 23,
        image: '/api/img/grapefruit.jpg',
        name: 'Grapefruit',
        price: 129,
        category: 'fruits'
    },
    {
        id: 24,
        image: '/api/img/melon.jpg',
        name: 'Melon',
        price: 109,
        category: 'fruits'
    },
    {
        id: 25,
        image: '/api/img/pumpkin.jpg',
        name: 'Pumpkin',
        price: 199,
        category: 'vegetables'
    },
    {
        id: 26,
        image: '/api/img/rambutan.jpg',
        name: 'Rambutan',
        price: 299,
        category: 'fruits'
    },
    {
        id: 27,
        image: '/api/img/strawberry.jpg',
        name: 'Strawberry',
        price: 299,
        category: 'berries'
    },
    {
        id: 28,
        image: '/api/img/blueberry.jpg',
        name: 'Blueberry',
        price: 249,
        category: 'berries'
    },
    {
        id: 29,
        image: '/api/img/raspberry.jpg',
        name: 'Raspberry',
        price: 249,
        category: 'berries'
    },
    {
        id: 30,
        image: '/api/img/blackberry.jpg',
        name: 'Blackberry',
        price: 249,
        category: 'berries'
    },
    {
        id: 31,
        image: '/api/img/watermelon.jpg',
        name: 'Watermelon',
        price: 149,
        category: 'berries'
    },
    {
        id: 32,
        image: '/api/img/cranberry.jpg',
        name: 'Cranberry',
        price: 189,
        category: 'berries'
    },    
    {
        id: 33,
        image: '/api/img/cherry.jpg',
        name: 'Cherry',
        price: 189,
        category: 'berries'
    },    
    {
        id: 34,
        image: '/api/img/sweet-cherry.jpg',
        name: 'Sweet cherry',
        price: 189,
        category: 'berries'
    },    
    {
        id: 35,
        image: '/api/img/pomelo.jpg',
        name: 'Pomelo',
        price: 189,
        category: 'fruits'
    },    
    {
        id: 36,
        image: '/api/img/hazelnut.jpg',
        name: 'Hazelnut',
        price: 1099,
        category: 'nuts'
    },    
    {
        id: 37,
        image: '/api/img/almond.jpg',
        name: 'Almond',
        price: 1199,
        category: 'nuts'
    },    
    {
        id: 38,
        image: '/api/img/walnut.jpg',
        name: 'Walnut',
        price: 899,
        category: 'nuts'
    },    
    {
        id: 39,
        image: '/api/img/brazilian-nut.jpg',
        name: 'Brazilian nut',
        price: 1399,
        category: 'nuts'
    },    
    {
        id: 40,
        image: '/api/img/cashew.jpg',
        name: 'Cashew',
        price: 1099,
        category: 'nuts'
    },    
    {
        id: 41,
        image: '/api/img/dates.jpg',
        name: 'Dates',
        price: 899,
        category: 'driedFruits'
    },    
    {
        id: 42,
        image: '/api/img/apricot.jpg',
        name: 'Apricot',
        price: 1099,
        category: 'fruits'
    },    
    {
        id: 43,
        image: '/api/img/dried-apricot.jpg',
        name: 'Dried apricot',
        price: 1099,
        category: 'driedFruits'
    },    
    {
        id: 44,
        image: '/api/img/dried-bananas.jpg',
        name: 'Dried bananas',
        price: 1099,
        category: 'driedFruits'
    },    
    {
        id: 45,
        image: '/api/img/prunes.jpg',
        name: 'Prunes',
        price: 499,
        category: 'driedFruits'
    },    
    {
        id: 46,
        image: '/api/img/pine-nut.jpg',
        name: 'Pine nut',
        price: 1899,
        category: 'nuts'
    },    
    {
        id: 47,
        image: '/api/img/plum.jpg',
        name: 'Plum',
        price: 499,
        category: 'fruits'
    },    
    {
        id: 48,
        image: '/api/img/dried-mango.jpg',
        name: 'Dried mango',
        price: 1299,
        category: 'driedFruits'
    },    
    {
        id: 49,
        image: '/api/img/pear.jpg',
        name: 'Pear',
        price: 1299,
        category: 'fruits'
    },    
    {
        id: 50,
        image: '/api/img/coconut.jpg',
        name: 'Coconut',
        price: 1099,
        category: 'nuts'
    },    

]

module.exports.getProducts = ({category, page}) => {
    console.log({category})
    if (!category || category === 'all') {
        return products;
    }

    return products.filter(({category: curCategory}) => category === curCategory)
}
