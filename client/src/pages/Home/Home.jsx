import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import "./Home.scss"
import Categories from "../../components/Categories/Categories"
export default function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts/>
      <Categories/>
    </div>
  )
}
