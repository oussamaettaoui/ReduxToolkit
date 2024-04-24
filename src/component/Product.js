import React, { useState } from 'react'
import product from '../data/data.json'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import{addItems} from '../reducer/Reducer'
import '../css/product.css'
import{FaStar} from 'react-icons/fa'

function Product() {
  const produits=useSelector(state=>state.TheSlice.products) 
  console.log(produits)
  const dispatch=useDispatch()
  const [qnt,setQnt]=useState(1)
  const {id}=useParams()
  const p=product.find((p)=>p.id==(Number(id)))
  
  const incrementQnt=()=>{
    setQnt(qnt+1)
  }
  const decrementQnt=()=>{
    if(qnt>1){
      setQnt(qnt-1)
    }else{
      setQnt(qnt-0)
    }
  }

  return (
    <div className='p'>
      <div>
      <img className='img2' src={'.'+p.img} />
      </div>
      <div className='info'>
        <div className='title'>{p.title}</div>
        <div className='price'>{p.price}</div>
        <div className='old1'>{p.old}</div>
        <div className='promo1'>{p.promo}</div>
        <div className='rate'>
          <FaStar style={{color:Math.round(p.rate)>0?'gold':'grey'}}/>
          <FaStar style={{color:Math.round(p.rate)>1?'gold':'grey'}}/>
          <FaStar style={{color:Math.round(p.rate)>2?'gold':'grey'}}/>
          <FaStar style={{color:Math.round(p.rate)>3?'gold':'grey'}}/>
          <FaStar style={{color:Math.round(p.rate)>4?'gold':'grey'}}/>
          <div >{Math.round(p.rate)}</div>
        </div>
        <div className='qnt'>
          <button onClick={decrementQnt} className='btn1'>-</button>
          <div className='qntv'>{qnt}</div>
          <button onClick={incrementQnt} className='btn1'>+</button>
        </div>
        <button className='btn2' onClick={()=>{dispatch(addItems({p,qnt}))}}>Add to card</button>
      </div>
    </div>
  )
}

export default Product