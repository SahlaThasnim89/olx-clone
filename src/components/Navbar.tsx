import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import { useState } from 'react'
import Login from './login'


type searchProps={
  setSearch:any
}


function Navbar({setSearch}:searchProps) {
  const [loginPopUp,setLoginPopUp]=useState(false)
  
  return (
    <>
    <div className='flex p-4 bg-slate-200 shadow-md'>
      <img src={olx} alt="" className='w-11 h-9'/>
      <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white rounded-md'>
        <img src={lens} alt="" className='w-6 h-5 mt-1'/>
        <input type="text" placeholder='Location' className='ml-3 outline-none'/>
        <img src={arrow} alt="" className='w-8 h-7'/>
      </div>
      <div className='flex h-12 ml-4 border-2 border-black bg-white rounded-md'>
        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className='ml-3 w-96 outline-none' placeholder='Find Cars, Mobile Phones and more...'/>
        <img src={search} alt="" />
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className="font-semibold">ENGLISH</h1>
        <img src={arrow} alt=""className='w-8 h-7'/>
      </div>
      <div onClick={()=>setLoginPopUp(!loginPopUp)} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
        <h1 className="font-bold text-lg">Login</h1>
      </div>
      <div className='w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className="font-bold text-lg ml-3">+ SELL</h1>
      </div>
    </div>
    {loginPopUp && <Login setLoginPopUp={setLoginPopUp}/>}
    </>
  )
}

export default Navbar