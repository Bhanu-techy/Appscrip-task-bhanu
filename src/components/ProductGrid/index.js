import {useState} from 'react'
import Filters from '../Filters'
import ProductCard from '../ProductCard'


import './index.css'

const ProductGrid= props => {

    const {products} = props
    const [showFilters, setFilters] = useState(false)

    console.log(products)

    const onClickFilters = () => {
      setFilters(!showFilters)
    }

  return (
    <div className='home-container'>
      <div className='heading-div'>
        <h1 className='heading'> DISCOVER OUR PRODUCTS</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur. Amet est posuerer rhoncus <br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr/>
      <div className='filter-head'>
        <div className='dis-flex'>
          <p className='bold-txt'>3546 ITEMS</p>
          {showFilters ?  <button onClick={onClickFilters} className='filter-btn'>&gt; HIDE FILTERS</button> : <button onClick={onClickFilters} className='filter-btn'>&lt; SHOW FILTERS</button> }
        </div>
      <div>
        <select className='bold-txt'>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE : HIGH TO LOW</option>
          <option>PRICE : LOW TO HIGH</option>
        </select>
      </div>
      </div>
      <hr/>
      <div className='container'>
        {showFilters && <div className='filter-div'><Filters/></div>}
        <ul className='products-div'>
          {products.map(each => (
            <ProductCard details={each}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductGrid
