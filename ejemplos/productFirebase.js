/* import { getFirestore } from './index';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let products = getFirestore().collection('Producto').limit(12)
        if () products = products.where("category_id", "==", `${}`)
        products.get().then((query) => {
            if (query.size === 0) reject('no hay registros')

            const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            resolve(data)
            console.log(data)
        })
    })
} */

/* export const getData = (id) => {
    return new Promise((resolve, reject) => {
        const detail = getFirestore().collection('Producto').doc(id)
        detail.get().then((query) => {
            if (query.size === 0) reject('No se encontro el producto')
            resolve(query.data())
        })
    })

} */