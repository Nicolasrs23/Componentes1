import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
  apiKey: "AIzaSyBZCBUuppZBQhdK_ZdViQWd-anOS2QUQCI",
  authDomain: "proyectocoder.firebaseapp.com",
  projectId: "proyectocoder",
  storageBucket: "proyectocoder.appspot.com",
  messagingSenderId: "921418819242",
  appId: "1:921418819242:web:720ce532c7247a98ec12d3",
}
    );

    export const getFirebase = () => {
        return app;
    }
//PARA LLAMAR LA BASE DE DATOS
    export const getFirestore = () => {
        return firebase.firestore();
    }
/* 

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("producto")
       
        itemCollection.get().then((response) =>{
            console.log(response)
        }
        )
        
    }, []) */