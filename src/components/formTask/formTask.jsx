import React from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils.js'

import './desktop-formTask.css'
import './android-formTask.css'
import './iphone-formTask.css'

import Selects from '../selects/selects.jsx'

export default function FormTask(props) {
    const {typeDevice, typeForm, createTask, isVisible, setIsViseble} = props;
    if (isVisible) {      
      return (
        <div className={`${typeDevice}-formTask`}>
          <div className={`${typeDevice}-formTask__shadow`}/>
          <div className={`${typeDevice}-formtask__content`}> 
            <input type="text" placeholder='Task Title' className={`${typeDevice}-formtask__input ${typeDevice}-regular-xL-body`}/>
            <Selects typeDevice = {typeDevice} typeForm = {typeForm} createTask = {createTask}/>
          </div>
        </div>
      )
    }
}
