import React, { useState } from 'react'
import "../cart/cart.css"
import { motion } from 'framer-motion'
import { CircularProgressbar } from "react-circular-progressbar";
import { LayoutGroup } from 'framer-motion';
import {UilTimes} from "@iconscout/react-unicons"

import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
function Cart({Value,index}) {
    let [expanded , setExpanded] = useState(1)
    return (
        <>
          <LayoutGroup id= {index}>
         {expanded ?  <CompactCard param = {Value} setExpanded = {() => {setExpanded(0)}} />  : 
            <ExpandedCard param = {Value} setExpanded = {() => {setExpanded(1)}}/> }
          </LayoutGroup>
        </>
      );
}



const productSales = [
    {
      name: 'Jan',
      product1: 4000,
      product2: 2400,
      product3: 4000,
    },
    {
      name: 'Feb',
      product1: 3000,
      product2: 2210,
      product3:3000,
    },
    {
      name: 'Mar',
      product1: 2000,
      product2: 2290,
      product3: 2500,
    },
    {
      name: 'Apr',
      product1: 2780,
      product2: 2000,
      product3:3200,
    },
    {
      name: 'May',
      product1: 1890,
      product2: 2181,
      product3: 1200,
    },
    {
      name: 'Jun',
      product1: 2390,
      product2: 2500,
      product3: 1000,
    },
  ];

function ExpandedCard({ param, setExpanded }) {
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"

      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{param.title}</span>
        <div className="chartContainer">
        <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Area
          type="monotone"
          dataKey={param.type}
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }
  
function CompactCard({param , setExpanded}) {
    const Png = param.png;
    return (
        <motion.div layoutId="expandableCard" className='CompactedCard' 
                style={{background : param.color.backGround , boxShadow : param.color.boxShadow
        }} onClick={setExpanded}>
            <div className='circle'>
                <CircularProgressbar  
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />             
                <span>{param.title}</span>
            </div>
            <div className='text'>
                <Png/>
                <span>${param.value}</span>
                <span>Last 24h</span>            
            </div>
        </motion.div>
    )
}

export default Cart

