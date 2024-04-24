import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import '../css/card.css'
import { removeItems,decrementqnt,addItems } from '../reducer/Reducer'

function Card() {
  const products=useSelector(state=>state.TheSlice.products)
  // const TH=useSelector(state=>state.TheSlice.p)
  const dispatch=useDispatch()
  // const Total=()=>{return TH?.reduce((p,c)=>{p+(c.qnt*c.price)},0)}
  const total =()=>{
    return products.reduce((p,c)=>{
      var a=c.price
      const res=c.price.split(' ')[0]
      return p+c.qnt+Number(res)
    },0)
  }
  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Desigation</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      
        {
          products.map((p,i)=>{
            return(
              <tr className='card-tr' key={i}>
                <td><img className='ic' src={p.img} alt="" /></td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td className='qc'>
                <button onClick={()=>{dispatch(decrementqnt(p))}}>-</button>
                <div>{p.qnt}</div>
                <button onClick={()=>{dispatch(addItems({p}))}}>+</button>
              </td>
              <td>
                <button onClick={()=>{dispatch(removeItems(p))}}>delete</button>
              </td>
              </tr>
                
              
            )
          })
        }
      </table>
      
      <div className='total'>total:{products.reduce((t,p)=>t+Number(p.price.split(" ")[0])*p.qnt,0)} Dhs</div>
    </div>
  )
}

export default Card