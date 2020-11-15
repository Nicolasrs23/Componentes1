/*   
  const Item = () => {
    const [products, setProducts] = useState();
  ​ */​
    // Cuando incializamos el componente, pedimos datos a la base de datos simulada
   /*  useEffect(() => {
      getProducts();
      return () => { console.log("hola") }
    }, []);
   */
  
  
  
  
  // Nuestra funcion que consulta a la base de datos y guarda los valores
/*   const getProducts = () => {
    const serverResponse = new Promise(resolve => { */
        ​
        // Simulacion de delay de una base de datos ( Cuando son pocos registros,
        // normalmente no tarda más de un segundo una base de datos )
  /*       setTimeout(() => {
          const product = [
          {name:"Zapatillas", price:2700, size:'42'},
          {name:"Camiseta de Racing", price:13299, size:'42'},
          {name:"Reloj", price:4002, size:'42'}];
          resolve(product);
        }, 3000)
      });
      serverResponse.then(response => {
        setProducts(response);
      })
    } */
  
      // Nuestra funcion que se ocupa a validar los productos y muesta el listado
    /*   const ReturnProducts = () => {
          if(!products){
            return <p>Cargando...</p>;
          }
          const list = products.map((elemento, index) => {
            return <div key={index}>
               {elemento.name}  
               <b> ${elemento.price}</b>
            </div>
          })
          return list;
        }
      ​
      ​
      ​}
   
      ​
      export default Item; */
  

      /* 
 let array = [{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,},
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
       
      }];


      const task = new Promise ((resolve,reject) =>{
      
        resolve(element)
    })
    
    task.then ((result) =>{

        result.forEach(element =>{
            document.write(element.id);
       
        });
    }
    ) */
    



    /// EJEMPLOS CLASE 6
/*     import React, { useState, useEffect } from 'react';
import './App.css';
​
const App = () => {
  const [products, setProducts] = useState(); */
​
​
  // Cuando incializamos el componente, pedimos datos a la base de datos simulada
/*   useEffect(() => {
    getProducts();
    return () => { console.log("hola") }
  }, []); */
​
​
​
  // Nuestra funcion que consulta a la base de datos y guarda los valores
  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
​
      // Simulacion de delay de una base de datos ( Cuando son pocos registros,
      // normalmente no tarda más de un segundo una base de datos )
      setTimeout(() => {
        const product = [
        {name:"Zapatillas", price:2700, size:'42'},
        {name:"Camiseta de Racing", price:13299, size:'42'},
        {name:"Reloj", price:4002, size:'42'}];
        resolve(product);
      }, 3000)
    });
    serverResponse.then(response => {
      setProducts(response);
    })
  }
​
​
​
  // Nuestra funcion que se ocupa a validar los productos y muesta el listado
  const ReturnProducts = () => {
    if(!products){
      return <p>Cargando...</p>;
    }
    const list = products.map((elemento, index) => {
      return <div key={index}>
         {elemento.name}  
         <b> ${elemento.price}</b>
      </div>
    })
    return list;
  }
​
​
​
  // Nuestro render
  return <>  
    <div className="App">
      <h1> ¡Hola Coders! ;)</h1>
      <ReturnProducts />
    </div>
  </>

​
export default App;
Contra


/////EJEMPLO CLASE 7
import { useState, useEffect } from "react";
export default function Home() {
    const [products, setProduct] = useState([]);
	useEffect(async () => {
		fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
		.then( response => response.json())
		.then( mercadolibreResult => {
			setProduct(mercadolibreResult.results)
		})
    }, []);
	return (
		<div className="mt-4 w-100 d-flex justify-content-center">
			{products.length === 0 ? (
				<div>Cargando</div>
			) : (
				<div>
					{products.map((product, index) => (
						<div key={index}>
							<div> El producto {product.title} tiene un valor de <strong>${product.price}</strong></div>
							<div></div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};


////// EJERSICIO CON CRIS ////


import React, { useState, useEffect } from 'react';
const Items = () => {
  const [products, setProducts] = useState();
  // Cuando incializamos el componente, pedimos datos a la base de datos simulada
  useEffect(() => {
    getProducts();
    return () => { console.log("hola") }
  }, []);
  // Nuestra funcion que consulta a la base de datos y guarda los valores
  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      // Simulacion de delay de una base de datos ( Cuando son pocos registros,
      // normalmente no tarda más de un segundo una base de datos )
      setTimeout(() => {
        const product = [
        {name:"Zapatillas", price:2700, size:'42'},
        {name:"Camiseta de Racing", price:13299, size:'42'},
        {name:"Reloj", price:4002, size:'42'}];
        resolve(product);
      }, 3000)
    });
    serverResponse.then(response => {
      setProducts(response);
    })
  }
  // Nuestra funcion que se ocupa a validar los productos y muesta el listado
  const ReturnProducts = () => {
    if(!products){
      return <p>Cargando...</p>;
    }
    const list = products.map((elemento, index) => {
      return <div key={index}>
         {elemento.name}  
         <b> ${elemento.price}</b>
      </div>
    })
    return list;
  }
  // Nuestro render
  return <>  
    <div className="App">
      <ReturnProducts />
    </div>
  </>
}
export default Items;