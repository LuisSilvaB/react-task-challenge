import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { BsSearch, BsXCircle, BsBell } from "react-icons/bs";

import './desktop-navigationBar.css'
import './android-navigationBar.css'
import './iphone-navigationBar.css'

export default function NavigationBar(props) {
  const { typeDevice } = props;
  const [ inputAndroidState, setInputAndroidState ] = useState(false)
  useEffect(()=>{
    (()=>{handleInputChange()})
  },[])
  const handleInputChange = () => {
    console.log('tocado');
    if (typeDevice == 'iphone') {setInputAndroidState(false)} 
    if (typeDevice == 'android') {setInputAndroidState(!inputAndroidState)} 
  }
  return (
    <div 
      className={`${typeDevice}-navigationBar`}>
      <div 
        className={`${typeDevice}-navigationBar__search-container`}>
        <div 
          className={`${typeDevice}-navigationBar__search-input-container`}>
          <BsSearch 
            className={`${typeDevice}-navigationBar__icon`} onClick={()=>{handleInputChange()}}/>
          <input 
            type="text" 
            placeholder={`${typeDevice === 'android'?'':'Search'}`} 
            className={`${typeDevice}-navigationBar__input desktop-regular-M-body`}/>
        </div>
        <BsXCircle 
          className={`${typeDevice}-navigationBar__icon ${typeDevice}-xcircle`}/>
        <BsBell 
          className={`${typeDevice}-navigationBar__icon`}/>
      </div>
      <img src='https://placebeard.it/640x360' className={`${typeDevice}-navigationBar__img`}/>
    </div>
  )
}
NavigationBar.protoTypes = {
  typeDevice: PropTypes.string,
}