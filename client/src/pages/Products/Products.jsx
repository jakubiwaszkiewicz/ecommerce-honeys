import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import { useState } from "react"
import "./Products.scss"
import catImg from "../../img/stock-1920-1080/stock-3.jpg"

export default function Products() {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Miód</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Inne</label>
          </div>
        </div>
        <div className="filterItem">
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price: Low to High</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price: High to Low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src={catImg}
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
        />
      </div>
    </div>
)}
