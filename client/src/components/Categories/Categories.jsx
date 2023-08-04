import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
export default function Categories() {
  return (
    "img/stock-1920-1080/stock-1.jpg",
        "img/stock-1920-1080/stock-2.jpg",
        "img/stock-1920-1080/stock-3.jpg",
    <div className='categories'>
        <div className="col">
            <img
                src='img/stock-1920-1080/stock-1.jpg'
                alt=''
            />
            <button>
                <Link to='/products/1'>
                    Miód
                </Link>
            </button>
        </div>
        <div className="col">
            <img
                src='img/stock-1920-1080/stock-2.jpg'
                alt=''
            />
            <button>
                <Link to='/products/2'>
                    Inne
                </Link>
            </button>
        </div>
    </div>
  )
}
