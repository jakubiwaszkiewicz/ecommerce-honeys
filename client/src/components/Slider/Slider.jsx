import React from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './Slider.scss';

export default function Slider() {

const [currentSlide, setCurrentSlide] = React.useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }


    const data = [
        "img/stock-1920-1080/stock-1.jpg",
        "img/stock-1920-1080/stock-2.jpg",
        "img/stock-1920-1080/stock-3.jpg",
    ]

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon className='ico'/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon className='ico'/>
            </div>
        </div>
    </div>
  )
}
