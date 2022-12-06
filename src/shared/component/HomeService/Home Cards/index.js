/* eslint-disable react/prop-types */
import React from 'react'
import './homecards.css'

function HomeCard ({ icon, HomeCardTitle, HomeCardDiscription }) {
  return (
        <>
            <div className='HomeCard'>
                <div className='HomeCardIcon'>{icon}</div>
                <div className='HomeCardTitle'>
                    {HomeCardTitle}
                </div>
                <div className='HomeCardDiscription'>
                   {HomeCardDiscription}
                </div>
            </div>
        </>
  )
}
export default HomeCard
