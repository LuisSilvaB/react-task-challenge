import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";

import './desktop-switchButton.css'
import './android-switchButton.css'
import './iphone-switchButton.css'

export default function SwitchButton(props) {
  const { typeDevice, optionActive, setOptionActive} = props; 
  if (typeDevice === 'desktop') {    
    return (
      <div className={`${typeDevice}-switch__button-container`}>
        <BsList 
        size={20} 
        className={`
          ${typeDevice}-switch__button 
          ${optionActive == 'myTask'? 'desktop-switch__button-active':''}`} 
        onClick={()=>{
          setOptionActive('myTask')}}/>
        <BsFillGridFill 
        size={20} 
        className={`
          ${typeDevice}-switch__button
          ${optionActive == 'dashboard'? 'desktop-switch__button-active':''}`}
        onClick={()=>{setOptionActive('dashboard')}} />
      </div>
    )
  }
  if (typeDevice === 'android') {    
    return (
      <div className={`${typeDevice}-switch__options-container`}>
        <div className={`
          ${typeDevice}-switch__option-container
          ${optionActive === 'dashboard'? 'android-switch__option-container-active':''}
          `} 
          onClick={()=>{setOptionActive('dashboard')}}
          >          
          <p 
            className={`
              ${typeDevice}-switch__option
              ${typeDevice}-regular-S-body`}>Dashboard
          </p>
        </div>
        <div className={`
          ${typeDevice}-switch__option-container
          ${optionActive === 'myTask'? 'android-switch__option-container-active':''}
          `} 
          onClick={()=>{setOptionActive('myTask')}}
          >
          <p 
            className={`
              ${typeDevice}-switch__option
              ${typeDevice}-regular-S-body
              `}>Task
          </p>
        </div>
      </div>
    )
  }
  if (typeDevice === 'iphone') {    
    return (
      <div className={`${typeDevice}-switch__options-container`}>
        <div className={`
          ${typeDevice}-switch__option-container
          ${optionActive === 'dashboard'? 'iphone-switch__option-container-active':''}
          `} 
          onClick={()=>{setOptionActive('dashboard')}}
          >          
          <p 
            className={`
              ${typeDevice}-switch__option
              ${typeDevice}-regular-S-body`}>Dashboard
          </p>
        </div>
        <div className={`
          ${typeDevice}-switch__option-container
          ${optionActive === 'myTask'? 'iphone-switch__option-container-active':''}
          `} 
          onClick={()=>{setOptionActive('myTask')}}
          >
          <p 
            className={`
              ${typeDevice}-switch__option
              ${typeDevice}-regular-S-body
              `}>Task
          </p>
        </div>
      </div>
    )
  }
}
