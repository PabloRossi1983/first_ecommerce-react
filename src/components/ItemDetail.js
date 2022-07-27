import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import "./Styles/ItemDetail.css";


const ItemDetail = ()=>{
    return(
      <div className="item-detail-cont">
        <div className="with-50-pc">
          <img src={"/assets/img/products-img/aceite-lavanda.jpg"} className="item-detail-img" />
        </div>
        <div className="item-detail with-50-pc">
            <h3 className="text-start">Nombre del producto</h3>
            <p className="text-start">lorem: Un bálsamo para el corazón. Así nos gusta definir al Aceite Esencial de Bergamota con su aroma frutal, dulce y feliz. Cuando perdimos la ilusión y nos cuesta seguir, se transforma en un bastón invisible sobre el cual podemos apoyarnos con confianza y fe en que el dolor y la tristeza no duran para siempre. Todo pasa. 
            </p>
            <p className="item-detail-price text-start">$3500</p>
            <div className="with-50-pc">
              <ItemCount />
            </div>
        </div>
      </div>
    )
}

export default ItemDetail;