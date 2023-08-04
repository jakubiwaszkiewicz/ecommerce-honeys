import "./Card.scss";
import React from 'react'
import { Link } from 'react-router-dom';

export default function ({item}) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="imgs">
          {item.isNew ? <span>Nowość!</span> : null}
          <img src={item.img} className="mainImg" alt=""/>
          {item.img2 ? <img src={item.img2} className="secondImg" alt=""/> : null}
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3 className="price">{item.price} PLN</h3>
          <h3 className="discount">{item.oldPrice} PLN</h3>
        </div>
      </div>
    </Link>
  )
}
