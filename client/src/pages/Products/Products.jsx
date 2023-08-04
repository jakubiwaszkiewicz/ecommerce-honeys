
export default function Products() {
  return (
    <div>
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
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price: Low to High</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Price: High to Low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="img/stock-1920-1080/stock-3.jpg"
          alt=""
        />
      </div>
    </div>
)}
