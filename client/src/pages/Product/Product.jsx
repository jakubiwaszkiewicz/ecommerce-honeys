import "./Product.scss"
import { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


export default function Product() {
  const[mainImg, setMainImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setMainImg(0)} />
          <img src={images[1]} alt="" onClick={e=>setMainImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[mainImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>190 PLN</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Rerum, a? Adipisci id saepe animi harum autem deserunt culpa temporibus
          inventore consectetur dignissimos debitis voluptatum rerum aut, nemo nisi corrupti. Ullam
        </p>
        <div className="quantity"> 
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <div className="add">
          <AddShoppingCartIcon/> DODAJ DO KOSZYKA
        </div>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
            </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Typ produktu: Miód</span>
          <span>Tag: Miód, pszczoły</span>
        </div>
      </div>
    </div>
  )
}
