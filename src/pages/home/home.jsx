import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import './desktop-home.css'
import './android-home.css'
import './iphone-home.css'

import SideBar from '../../components/sidebar/sideBar'
import NavigationBar from '../../components/topNavigationNavbar/navigationBar'

import useAppContext from '../../hooks/context/useAppContext'
import MainControls from '../../components/mainControls/mainControls'
import AddButton from '../../components/addButton/addButton'
export default function Home() {
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
    <div className={`${typeDevice}-home`}
    onTouchStart={startDrag}
    onTouchMove={finishDrag}
    onClick={closeOnTouch}
    >
      <div className={`${typeDevice}-home__container`}>
        <SideBar isOpen = { isOpen } typeDevice = { typeDevice } optionActive = { optionActive } handleOptionClick = {handleOptionClick}/>
        <div className={`${typeDevice}-home__main-content`}>
          <NavigationBar typeDevice = { typeDevice }/>  
          <MainControls typeDevice = { typeDevice } optionActive= { optionActive } setOptionActive = { setOptionActive }/>
          {typeDevice === 'android'? <AddButton typeDevice = {typeDevice}/> : <></>}
        </div>
      </div>
    </div>
  )
}
Home.protoTypes = {
  isOpen: PropTypes.string,
  typeDevice: PropTypes.string,
}