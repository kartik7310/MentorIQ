"use client"
import React, { useState } from 'react'

const PreviousHistory = () => {
  const [userHistory,setUserHistory] = useState([])
  return (
   <div className='mt-5 p-5 border rounded-xl'>
    <h2>Previous History</h2>
    <p>What you work Previously,you can see here</p>
    {userHistory.length==0 && <div>
        not history
      </div>}
   </div>
  )
}

export default PreviousHistory
