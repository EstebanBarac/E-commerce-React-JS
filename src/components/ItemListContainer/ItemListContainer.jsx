import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

let productosMock = [
  {id: '1', category: 'deportivos', nombre: 'Lexus IS350 F Sport', color: 'Blanco', precio: '180', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2022/02/54FE7A0A-F43A-4DE3-BD43-BEF1776B320C-1-e1644264471313-800x588.jpg'},
  {id: '2', category: 'deportivos', nombre: 'AMG S Class', color: 'Negro', precio: '1.000', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2022/05/73aa7f9c-d935-4a03-bd0c-00cde266ce08-e1653587649805-800x554.jpg'},
  {id: '3', category: 'deportivos', nombre: 'Audi RS 6', color: 'Gris', precio: '400', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2022/05/IMG_8464.jpg'},
  {id: '4', category: 'suv', nombre: 'BMW X5 2020', color: 'Blanco', precio: '200', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/19bf7ea0-bbb5-4fbe-ab39-d4f85e4fa6e4-e1642101848858.jpeg'},
  {id: '5', category: 'exoticos', nombre: 'Porsche Carrera 911 2020', color: 'Blanco', precio: '750', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/b4f57f79-4ba5-4d39-b290-2025880daac7.jpg'},
  {id: '6', category: 'deportivos', nombre: 'Bentley Continental GT', color: 'Blanco', precio: '750', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/d163add7-15f5-42de-a40d-739dd9cd05be-e1644441187381-600x433.jpg'},
  {id: '7', category: 'suv', nombre: 'Bentley Bentayga', color: 'Azul', precio: '1.000', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/IMG_5404-e1642105805582-800x610.jpeg'},
  {id: '8', category: 'exoticos', nombre: 'McLaren 570S Spider', color: 'Blanco', precio: '1.400', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/IMG_5940-e1642106936557-800x609.jpeg'},
  {id: '9', category: 'suv', nombre: 'Lamborghini Urus', color: 'Negro', precio: '1.400', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/12/IMG-6918-e1642107026727-800x604.jpg'},
  {id: '10', category: 'suv', nombre: 'Range Rover 2021', color: 'Negro', precio: '400', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/bb5c68fc-4c65-4fd7-8a35-6ec9d1d7ea64-e1642102833402-800x610.jpg'},
  {id: '11', category: 'exoticos', nombre: 'Ferrari 488 Spyder', color: 'Rojo', precio: '1.500', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2022/05/IMG_8525-800x534.jpg'},
  {id: '12', category: 'exoticos', nombre: 'Lamborghini Huracan Spyder', color: 'Gris', precio: '1.200', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2022/04/IMG_8265-800x534.jpg'},
  {id: '13', category: 'deportivos', nombre: 'BMW 640i Convertible', color: 'Blanco', precio: '350', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/11/A5B78FFB-F72E-43B5-BE4F-E34523C1ACAD.jpg'},
  {id: '14', category: 'exoticos', nombre: 'Lamborghini Huracan Evo', color: 'Rojo', precio: '1.200', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/WhatsApp-Image-2020-10-30-at-7.19.25-PM-5-e1642106122137-800x606.jpeg'},
  {id: '15', category: 'suv', nombre: 'Mercedes-Benz GLE43 Black', color: 'Negro', precio: '300', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/1e5a9bae-716f-4ac2-b7ff-de3fcee10226-800x600.jpg'},
  {id: '16', category: 'suv', nombre: 'Mercedes-Benz G63', color: 'Blanco', precio: '1.000', imgURL: 'https://boystoysmiami.com/wp-content/uploads/2021/10/762c86e5-43b2-4a6e-a54d-d24d94347344-e1642105973185-800x616.jpeg'},
];

export default function ItemListContainer() {
  
  const{idCat} = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(()=>{
  const autos = new Promise((res, rej) => {
      setResultado ([]);
      setLoading(true);
      setError(false);
      
    setTimeout(() => {

      (!idCat) ? res(productosMock) : res(productosMock.filter(item => item.category==idCat));
    }, 500);
  });

  autos 
  .then((result) =>{
    setResultado(result);
  })
  .catch((error) => {
    setError(true);
    console.log(error);
  })
  .finally(() => {
    setLoading(false);
  });   

}, [idCat]);

console.log(resultado);
  
return (<>
  <div id='loading'>{loading && 'Loading...'}</div>
  <div>{error && 'Hubo un error inesperado'}</div>
  <div>
      <ItemList autos={resultado} />
  </div>
  </>
)
}
