export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve([{
                id: 1,
                productName: 'Sleek Granite Sausages',
                price: '10'
            },
            {
                id: 1,
                productName: 'Awesome Fresh Cheese',
                price: '8'
            },
            {
                id: 1,
                productName: 'Rustic Wooden Cheese',
                price: '7'
            }
        ])
    })
}


export const getProduct = () => {
    return new Promise((resolve, reject) => {
        resolve(
            {
                id: 1,
                productName: 'Awesome Fresh Cheese',
                price: '$8',
                details: 'The best cheese fo the world'
                
            }
          
        )
    })
}

