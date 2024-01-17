import React from 'react'
import './home.css'

function Card({title,content}){
  return (
    <div className='relative m-2 flex-shrink-0 w-[28rem] h-[30rem] rounded-[45px] bg-zinc-900/90 text-white p-8 overflow-hidden border-2'>
        <p className='text-sm mt-5 font-semibold leading-tight text-center '>{title}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5 className='text-center'>{content}</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Card;
