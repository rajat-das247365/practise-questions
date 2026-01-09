import React from 'react'
import GridLayout from './components/GridLayout'
import Navbar from './Navbar'
const data = [
  {
    label:"abc"
  },
   {
    label:"xyz"
  }, {
    label:"mno"
  }
]
const data2 = [
  {
    label:"abc"
  },
   {
    label:"xyz"
  }, {
    label:"mno"
  }
]
const data3 = [
  {
    label:"abc"
  },
   {
    label:"xyz"
  }, {
    label:"mno"
  }
]

const App = () => {
  return (
/*<div>
   <GridLayout />
  </div> */
  <div className='bg-slate-800 w-full min-h-screen text-slate-200'>
  <div className="navbar  ">
    <Navbar drop ={"Home"} dataItem ={data}/>
    
  </div>
  </div>
  
     

  )
}

export default App
