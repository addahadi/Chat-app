

import React from "react"
import { Area, AreaChart ,  ResponsiveContainer ,XAxis , YAxis  } from "recharts";


import "../Custom/custom.css"

const data = [
    {
      name: 'Jan',
      product1: 4000,
    },
    {
      name: 'Feb',
      product1: 3000,
    },
    {
      name: 'Mar',
      product1: 2000,
    },
    {
      name: 'Apr',
      product1: 2780,
    },
    {
      name: 'May',
      product1: 1890,
    },
    {
      name: 'Jun',
      product1: 2390,
    },
  ];


function Custom(){
    return (
        <div className="customers">
            <ResponsiveContainer className="graph_container">
                <AreaChart width={150} height={200} data={data}>
                <Area dataKey="product1"  type={"monotone"} stroke="#BB67FF" />
                <XAxis dataKey="name"/>
                <YAxis/>
                </AreaChart>
            </ResponsiveContainer>
                
        </div>
    )
}
export default Custom