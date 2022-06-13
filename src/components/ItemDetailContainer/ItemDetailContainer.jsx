import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const getItems = new Promise((res) => {
    setTimeout(() => {
        res([
            {
                "id": "9",
                "nombre": "McLaren 570S Spider",
                "imgURL": "https://boystoysmiami.com/wp-content/uploads/2021/10/IMG_5940-e1642106936557-800x609.jpeg",
                "price": "1.400",
                "descripcion": "Los McLaren 570 están basados en el monocasco de carbono que es empleado por todos los modelos de la gama McLaren. El propulsor es un 3.8 V8 Twin-Turbo similar al que emplean otros modelos de McLaren pero con una potencia máxima de 570 CV."
            }
        ]);
    }, 2000);
});

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState();

    useEffect(() => {
        getItems.then((res) => {
            setItemDetail(res[0]);
        });
    }, []);
    return (
        <>
            {itemDetail === undefined ? (
                <p>loading</p>
            ) : (
                <ItemDetail id={itemDetail.id} nombre={itemDetail.nombre} img={itemDetail.imgURL} descripcion={itemDetail.descripcion} price={itemDetail.price} />
            )}    
        </>
    );
};

export default ItemDetailContainer;