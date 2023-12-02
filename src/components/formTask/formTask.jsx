import React from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils.js'

import './desktop-formTask.css'
import './android-formTask.css'
import './iphone-formTask.css'

import Selects from '../selects/selects.jsx'
import Button from '../button/button.jsx'
import useAppContext from '../../hooks/context/useAppContext.js'

export default function FormTask(props) {
    const { typeDevice, typeForm, CreateTask, setIsVisible, isVisible, setTask, task} = useAppContext()
    if (isVisible) {      
      return (
        <div className={`${typeDevice}-formTask`}>
          <div className={`${typeDevice}-formTask__shadow`}/>
          <div className={`${typeDevice}-formtask__content`}> 
            <input type="text" placeholder='Task Title' className={`${typeDevice}-formtask__input ${typeDevice}-regular-xL-body ${typeDevice}-body-xl-bold`} onChange={(e)=>{
              setTask({...task,['name']:e.target.value})
              console.log(task);
              }}/>
            <Selects typeDevice = {typeDevice} typeForm = {typeForm} setTask = {setTask}/>
            <div className={`${typeDevice}-buttons-container`}>
              <Button functionButton = {setIsVisible} typeButton = {'close'} typeDevice = {typeDevice} isVisible = {isVisible}/>
              <Button CreateTask = {CreateTask} typeButton = {'submit'} typeDevice = {typeDevice} task = {task}/>
            </div>
          </div>
        </div>
      )
    }
}
