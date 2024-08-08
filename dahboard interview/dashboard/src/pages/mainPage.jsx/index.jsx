import React from 'react'
import DashboardCards from './common/cards'
import MainContent from './common/chartAndSlider'
import Stats from './common/stats'

const MainPage = () => {
  return (
    <div className='mt-10'>
        <DashboardCards/>
        <MainContent/>
        <Stats/>
    </div>
  )
}

export default MainPage