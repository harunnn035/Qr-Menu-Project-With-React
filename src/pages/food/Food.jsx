import React from 'react'
import TabMenu from '../../components/tabMenu/TabMenu'
export default function Food() {
  return (
    <div className='food'>
      <TabMenu/>
   <div className="main-food">Ana Yemek</div>
   <div className="">Ara yemek</div>
   <div className="drinks">İçecek</div>
   <div className="dessert">Tatlı</div>
    </div>
  )
}
