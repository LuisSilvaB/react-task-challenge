import React from 'react'
import { BsFillGridFill, BsList, BsFillPersonFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './desktop-switchButton.css'
import './android-switchButton.css'
import './iphone-switchButton.css'

export default function SwitchButton(props) {
  const { typeDevice, optionActive, setOptionActive} = props; 
  if (typeDevice === 'desktop') {    
    return (
      <div className={`${typeDevice}-switch__button-container`}>
        <Link to={'/'} className='switchLink'>
          <BsFillGridFill 
          size={20} 
          className={`
            ${typeDevice}-switch__button
            ${optionActive == 'dashboard'? 'desktop-switch__button-active':''}`}
          onClick={()=>{setOptionActive('dashboard')}} />
        </Link>
        <Link to={'/myTasks'} className='switchLink'>        
          <BsList 
          size={20} 
          className={`
            ${typeDevice}-switch__button 
            ${optionActive == 'myTask'? 'desktop-switch__button-active':''}`} 
          onClick={()=>{
            setOptionActive('myTask')}}/>
        </Link>
        <Link to={'/profile'} className='switchLink'>
          <BsFillPersonFill  
          size={20} 
          className={`
            ${typeDevice}-switch__button
            ${optionActive == 'profile'? 'desktop-switch__button-active':''}`}
          onClick={()=>{setOptionActive('profile')}} />
        </Link>
      </div>
    )
  }
  if (typeDevice === 'android') {    
    return (
      <div className={`${typeDevice}-switch__options-container `}>    
          <Link to={'/'}className={`
            switchLink
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
          </Link>
          <Link to={'/myTasks'} className={`
            switchLink
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
          </Link>
      </div>
    )
  }
  if (typeDevice === 'iphone') {    
    return (
      <div className={`${typeDevice}-switch__options-container`}>
          <Link to={'/'} className={` 
            switchLink
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
          </Link>
          <Link to={'myTasks'} className={` switchLink
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
          </Link>
      </div>
    )
  }
}
