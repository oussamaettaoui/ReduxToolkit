import React, { useState,useMemo } from 'react'
import data from '../data/data.json'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { addItems } from '../reducer/Reducer'
function Home() {
  const query=useSelector(state=>state.TheSlice.keyword)
  const dispatch=useDispatch()
  const [products,setProducts]=useState(data)
  // using filter & includes to check if each element's gategory has match the query 
  const State=useMemo(()=>{
    return products.filter(e=>e.category.includes(query))
},[query,products])
  return (
    <div>

      <div className='products'>
      {State.map((p,i)=>{
        return(<div key={i} className='product'>
          <Link to={'/product/'+p.id}><img className='img1' src={p.img} alt={p.title} /></Link>
          <div>{p.title}</div>
          <div className="old">{p.old}</div>
          <div>{p.price}</div>
          <div className='promo'>{p.promo}</div>
          <button onClick={()=>{dispatch(addItems({p}))}}>add to cart</button>
        </div>)
      })}
      </div>
    </div>
  )
}

export default Home