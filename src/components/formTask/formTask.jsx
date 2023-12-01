import React from 'react'
import { POINT_ESTIMATE } from '../../utils/constants.js'

import './desktop-formTask.css'
import './android-formTask.css'
import './iphone-formTask.css'

import formEstimate from '/img/taskForm/formEstimate.svg'
import ravnLogo from '/img/sidebar/ravnLogo.svg'

export default function FormTask(props) {
    const {typeDevice, typeForm, createTask, isVisible, setIsViseble} = props;
  return (
    <div className={`${typeDevice}-formTask`}>
      <div className={`${typeDevice}-formTask__shadow`} />
      <div className={`${typeDevice}-formtask__content`}> 
        <input type="text" placeholder='Task Title' className={`${typeDevice}-formtask__input ${typeDevice}-regular-xL-body`}/>
        <div className={`${typeDevice}-formtask__options-container`}>
          <select name="" id="" className={`${typeDevice}-form__select`}>

            <option value="" className={`${typeDevice}-form__option`} defaultChecked disabled>ESTIMATE</option>
            {
              Object.keys(POINT_ESTIMATE).map((el, key) => (
                  
                  <option key={key} value={el} className={`${typeDevice}-form__option`}>
                    <img src={ravnLogo} alt=""/>
                    {(POINT_ESTIMATE[el])}
                    </option>
                )
              )
            }
          </select>
        </div>
      </div>
    </div>
  )
}
