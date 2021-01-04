import { getFirestore } from "../../FireBase/index";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("Producto");
    query.get().then((response) => {
      if (response.size === 0) reject("empty");
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      resolve(data);
    });
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("Producto").doc(id);
    query.get().then((response) => {
      if (response.size === 0) reject("empty");
    
        const data = { ...response.data(), id: response.id };
      console.log(response);
      resolve(data);
      

    });
  });
};
