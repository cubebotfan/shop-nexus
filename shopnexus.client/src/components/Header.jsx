import {useState} from 'react'
import { SlMagnifier } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Header() {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <header>
            <h1><Link to='/'>Shop<span>Nexus</span></Link></h1> 
            <nav>
                <ul>
                    <li><Link to='/categories/1'>Categories</Link></li>
                    <li><Link to='/catalog'>All Products</Link></li>
                    <li>About Us</li>
                </ul>
            </nav>  
            <div className='search-product'>
                <div className='input-wrapper'>
                    <input
                        type='text'
                        placeholder={`Search your products here `}
                    />
                    <SlMagnifier className='magnifier-icon'/>
                </div>
            </div>
            <div className='access-btns'>
                <span onClick={() => {setIsClicked(isClicked ? false : true)}}><FaRegUser/> Account</span>
                <div className='btns-modal' style={{display: isClicked ? "block" : "none"}}>
                    <div className='btns-wrapper'>
                        <span></span>
                        <button className='login-btn btn'>Log In</button> 
                        <button className='signup-btn btn'>Sign Up</button>
                    </div>
                </div>
            </div> 
            <div className='cart-section'>
                <span><IoCartSharp/> Cart</span>
            </div>    
        </header>
    )
}

export default Header