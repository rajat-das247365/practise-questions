import React from 'react'

const GridLayout = () => {
  return (
    <div>
       <div className='bg-slate-700 w-full min-h-screen text-slate-200 flex justify-center items-center'>
      <div className='w-150 max-w-4xl  grid grid-flow-row grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4'>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      <div className='border h-40 '></div>
      <div className=' border h-40'></div>
      <div className=' border h-40'></div>
      </div>
      </div>
    </div>
  )
}
//
export default GridLayout
