import './App.css'
import React from "react"
import Bar from "./Component/bar/bar.jsx"
import Dashboard from './Component/Dashboard/dashboard.jsx'
import BasicTable from './Component/table/table.jsx'
import Ubdates from './Component/ubdates/ubdates.jsx'
import Custom from './Component/Custom/custom.jsx'

function App(){
  return(
    <div className='body'>
      <div className='container'>
        <Bar/>
        <div className='main-sect'>
          <Dashboard/>
          <BasicTable/>
        </div>
        <div className='Righ_sect'>
            <Ubdates />
            <div style={{marginTop:40}}>
              <h2 style={{marginLeft:40 , fontFamily : "sans-serif"}}>Review</h2>
              <Custom />
            </div>
        </div>
      </div>
    </div>
  )
}

export default App