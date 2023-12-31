import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card.jsx';

export default function FeaturedProducts({type}) {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            img2:"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Honey good",
            isNew: true,
            oldPrice: 45,
            price: 40,
        },
        {
            id: 1,
            img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Honey good",
            isNew: true,
            oldPrice: 45,
            price: 40,
        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Honey good",
            isNew: true,
            oldPrice: 45,
            price: 40,
        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Honey good",
            isNew: true,
            oldPrice: 45,
            price: 40,
        }
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>
                {type} products
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Unde laboriosam quidem officia magnam, ab numquam necessitatibus
                aliquid quisquam vitae corporis provident, nesciunt eum obcaecati
                minus nobis architecto adipisci! Quae, magnam!
            </p>    
        </div>
        
        <div className="bottom">
            {data.map((item) => (
                <Card
                    item = {item}
                    key = {item.id}
                />
            ))}
        </div>
    </div>
  )
}
