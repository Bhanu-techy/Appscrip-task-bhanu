import {useState} from 'react'
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import './index.css'

const ProductCard=props =>{
  const [isLiked, setLike] = useState(false)

  const {details} = props
  const {image, title} = details

  const onClickLike = () => {
    setLike(!isLiked)
  }

  return (
    <li className='product-card'>
    <img src={image} alt={`Img of ${title}`} className='product-img'/>
    <div className='card-txt-div'>
      <div className='product-details'>
        <p className='title'>{title}</p>
        <p className='signin-txt'><u>Sign in</u> or Create an account to see price</p>
      </div>
    {isLiked ? <button className='like-btn' onClick={onClickLike}><FcLike size={20}/></button> : <button className='like-btn' onClick={onClickLike}><CiHeart size={20}/></button>}
    </div>
    </li>
  )
}

export default ProductCard