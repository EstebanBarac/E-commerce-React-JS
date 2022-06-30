import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer() {
  
  const{idProd} = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'items', idProd);

    getDoc(productRef).then((snapshot) => {
        setResultado({...snapshot.data(), id: snapshot.id });
    }).catch((error) => {
      setError(error);
    }
    ).finally(() => {
      setLoading(false);
    });
  }, [idProd]);

  
return (<>
  <div id='loading'>{loading && 'Loading...'}</div>
  <div>{error && 'Hubo un error inesperado'}</div>
  <div id='ItemDetailContainer'>
      <div id='Container'>
        <ItemDetail autos={resultado} />
      </div>
  </div>
  </>
)
}
