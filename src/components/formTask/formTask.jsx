import React, { useEffect, useState } from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils.js'

import './desktop-formTask.css'
import './android-formTask.css'
import './iphone-formTask.css'

import Selects from '../selects/selects.jsx'
import Button from '../button/button.jsx'
import useAppContext from '../../hooks/context/useAppContext.js'

export default function FormTask() {
    const { infoFormTask, setInfoFormtask, typeDevice, typeForm, taskContext, setTaskContext, isVisible } = useAppContext()

    const [activeShadow, setActiveShadow] = useState(false); 

    const setShadow =  () => {
          if (activeShadow) {
            return <div className={`${typeDevice}-formTask__shadow`}/>
        }
      }

    if (isVisible && typeForm === 'create') {      
      return (
        <div className={`${typeDevice}-formTask`}>
          <div className={`${typeDevice}-formTask__shadow`}/>   
          <div className={`${typeDevice}-formtask__content`}> 
            <input type="text"  placeholder='Task Title' className={`${typeDevice}-formtask__input ${typeDevice}-body-xl-bold`} onChange={(e)=>{
              setTaskContext({...taskContext,['name']:e.target.value})
            }}/>
            {setShadow()}
            <Selects typeDevice = {typeDevice} typeForm = {typeForm} setTask = {taskContext} setActiveShadow = {setActiveShadow} activeShadow = {activeShadow} />
            <div className={`${typeDevice}-buttons-container`}>
              <Button typeButton = {'close'} />
              <Button typeForm = {typeForm} />
            </div>
          </div>
        </div>
      )
    }
    if (isVisible && typeForm === 'update') {

      return(
        <div className={`${typeDevice}-formTask`}>
        <div className={`${typeDevice}-formTask__shadow`}/>
        <div className={`${typeDevice}-formtask__content`}> 
          <input type="text" value={infoFormTask.name === "" ? "" : infoFormTask.name } placeholder='Task Title' className={`${typeDevice}-formtask__input ${typeDevice}-regular-xL-body ${typeDevice}-body-xl-bold`} onChange={(e)=>{
            setInfoFormtask({...infoFormTask,['name']:e.target.value})
            setTaskContext({...taskContext,['name']:e.target.value})
            }}/>
          <Selects typeDevice = {typeDevice} />
          <div className={`${typeDevice}-buttons-container`}>
            <Button typeButton = {'close'} />
            <Button typeForm = {typeForm} />
          </div>
        </div>
      </div>
      )
    }
    if (isVisible && typeForm == "delete") {
      return(
        <div className={`${typeDevice}-formTask`}>
          <div className={`${typeDevice}-formTask__shadow`}/>
            <div className={`${typeDevice}-formtask__content-delete`}>
              <p>Do you want to delete this task?
                <p className={`${typeDevice}-regular-xL-body`}>
                 {taskContext.name}
                </p>
              </p>
              <div className={`${typeDevice}-buttons-container`}>
                <Button typeButton = {'close'} />
                <Button typeForm = {typeForm} />

              </div>
            </div>
          </div>
      )
    }
}
