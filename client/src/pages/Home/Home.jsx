import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import "./Home.scss"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"

export default function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts/>
      <Categories/>
      <Contact/>
    </div>
  )
}
