import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  
  const{idCat} = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  
  useEffect(() => {

    const db = getFirestore();
    const productsCollection = collection(db, 'items');

    if(idCat) {
      const q = query(productsCollection, where('category', '==', idCat));

      getDocs(q).then((snapshot) => {
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }).catch((error) =>{
      setError(error);
    }
    ).finally(() => {
      setLoading(false);
    });  
    } else {
      getDocs(productsCollection).then((snapshot) => {
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }).catch((error) =>{
      setError(error);
    }
    ).finally(() => {
      setLoading(false);
      }
    );  
  }
 }, [idCat]);


  
return (<>
  <div id='loading'>{loading && 'Loading...'}</div>
  <div>{error && 'Hubo un error inesperado'}</div>
  <div>
      <ItemList autos={resultado} />
  </div>
  </>
)
}
