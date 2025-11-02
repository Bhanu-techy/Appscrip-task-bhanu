import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import './index.css'

function Header() {
  return (
    <header>
      <div className="dark-container">
        <div className="logo-div-sm">
          <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1762075630/element-4_ujtwtu.png" alt="logo"/>
          <p>Loren ipsum dolor</p>
        </div>
        <div  className="dis-flex">
          <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1762075630/element-4_ujtwtu.png" alt="logo"/>
          <p>Loren ipsum dolor</p>
        </div>
        <div  className=" logo-div-sm">
          <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1762075630/element-4_ujtwtu.png" alt="logo"/>
          <p>Loren ipsum dolor</p>
        </div>
      </div>
        <div className='logo-container'>
        <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1761931168/Logo_s9w9az.png" alt="logo"/>
        <h1>LOGO</h1>
        <div className="icons-container">
            <CiSearch size={30}/>
            <CiHeart size={30}/>
            <IoBagOutline size={28}/>
            <BsPerson size={30}/>
            <select>
              <option>ENG</option>
            </select>
        </div>
        </div>
        <div className="header-list-sm">
          <p>HOME</p>
          <p>SHOP</p>
        </div>
        <ul className="header-list">
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
    </header>
  )
}

export default Header