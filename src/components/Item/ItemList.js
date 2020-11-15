import React, {
    useState,
    useEffect
} from 'react';
import '../Item/Itemlist.scss'


const Items = () => {
    const [products, setProducts] = useState();
    // Cuando incializamos el componente, pedimos datos a la base de datos simulada
    useEffect(() => {
        getProducts();
        return () => {
            console.log("hola")
        }
    }, []);
    // Nuestra funcion que consulta a la base de datos y guarda los valores
    const getProducts = () => {
        const serverResponse = new Promise(resolve => {
            // Simulacion de delay de una base de datos ( Cuando son pocos registros,
            // normalmente no tarda más de un segundo una base de datos )
            setTimeout(() => {
                const product = [{
                        name: "Shampoo Loreal",
                        price: 2700,
                        size: '42'
                    },
                    {
                        name: "Perf.Kenzo",
                        price: 2000,
                        size: '42'
                    },
                    {
                        name: "Rimel",
                        price: 400,
                        size: '42'
                    }
                ];
                resolve(product);
            }, 3000)
        });
        serverResponse.then(response => {
            setProducts(response);
        })
    }
    // Nuestra funcion que se ocupa a validar los productos y muesta el listado
    const ReturnProducts = () => {
        if (!products) {
            return <p > Cargando... </p>;
        }
        const list = products.map((elemento, index) => {
            return <div className = "lista"
            key = {
                    index
                } > {
                    elemento.name
                    
                } 
         <br/> 
         <b>  $ {
                    elemento.price
                } </b> 
                </div>
        })
        return list;
    }
    // Nuestro render
    return <>
        <div>
        <ReturnProducts/>
        </div>
         </>
}
export default Items;