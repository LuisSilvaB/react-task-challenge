import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import './desktop-dashboard.css'
import './android-dashboard.css'
import './iphone-dashboard.css'

import SideBar from '../../components/sidebar/sideBar'
import NavigationBar from '../../components/topNavigationNavbar/navigationBar'

import useAppContext from '../../hooks/context/useAppContext'
import MainControls from '../../components/mainControls/mainControls'
import AddButton from '../../components/addButton/addButton'
export default function DashboardPage() {
  const { typeDevice } = useAppContext()
  const [ optionActive, setOptionActive ] = useState(''); 
  const [ isOpen, setIsOpen ] = useState('close'); 
  const [ positionDrag, setPositionDrag ] = useState(); 

  const handleOptionClick = (option) => {
    setOptionActive(option); 
  }
  const startDrag = (event) => {
    setPositionDrag(event.touches[0].clientX);
  }
  const finishDrag = (event) => {
    const distanceDrag = event.touches[0].clientX - positionDrag; 
    if (distanceDrag > 50) {
      setIsOpen('open')
    }
    if (distanceDrag < -50) {
      setIsOpen('close')
    }
  }
  const closeOnTouch = () => {
      setIsOpen('close')
  }
  
  return (
    <div className={`${typeDevice}-dashboard`}
    onTouchStart={startDrag}
    onTouchMove={finishDrag}
    onClick={closeOnTouch}
    >
      <div className={`${typeDevice}-dashboard__container`}>
        <SideBar isOpen = { isOpen } typeDevice = { typeDevice } optionActive = { optionActive } handleOptionClick = {handleOptionClick}/>
        <div className={`${typeDevice}-dashboard__main-content`}>
          <NavigationBar typeDevice = { typeDevice }/>  
          <MainControls typeDevice = { typeDevice } optionActive= { optionActive } setOptionActive = { setOptionActive }/>
          {typeDevice === 'android'? <AddButton typeDevice = {typeDevice}/> : <></>}
        </div>
      </div>
    </div>
  )
}
DashboardPage.protoTypes = {
  isOpen: PropTypes.string,
  typeDevice: PropTypes.string,
}