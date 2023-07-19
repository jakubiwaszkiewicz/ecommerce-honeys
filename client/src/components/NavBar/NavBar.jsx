import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlineIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
                <div className="item">
                    <img src="img/en.png" alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>PLN</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link to="/products/1">Honey</Link>
                </div>
                <div className="item">
                    <Link to="/products/2">Honey2</Link>
                </div>
                <div className="item">
                    <Link to="/products/3">Honey3</Link>
                </div>
            </div>
            <div className='center'>
                <Link to="/">
                    <img src="img/logo-2.png" alt="" />
                </Link>
            </div>
            
            <div className='right'>
                <div className='item'>
                    <Link to="/">Homepage</Link>
                </div>
                <div className='item'>
                    <Link to="/">About</Link>
                </div>
                <div className='item'>
                    <Link to="/">Contact</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlineIcon/>
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span className="itemCount">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
