import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import { FaCartPlus, FaHouzz } from 'react-icons/fa';
import '../css/navbar.css'
import { useSelector,useDispatch} from 'react-redux';
import { search } from '../reducer/Reducer';

function Navbar() {
  const [word,setWord]=useState('')
  const items=useSelector(state=>state.TheSlice.products)
  const dispatch=useDispatch()
  
  
  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src="../images/a.png" alt="" /></Link>
      <div className='bs'>
      <input placeholder="Search for product..." type="text" name="text" className="input" onChange={(e)=>{setWord(e.target.value)}}/>      
      <button onClick={()=>{dispatch(search(word))}}>Hover me</button>
      </div>
      <div>
      <Link to={'/card'}><FaCartPlus className='carticon'/></Link>
      <div className='item'>{items.length||0}</div>
      </div>
      
    </div>
  )
}

export default Navbar