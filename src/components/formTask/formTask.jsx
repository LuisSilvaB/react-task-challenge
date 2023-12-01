import React from 'react'

import './desktop-formTask.css'
import './android-formTask.css'
import './iphone-formTask.css'

export default function FormTask(props) {
    const {typeDevice, typeForm, createTask, isVisible, setIsViseble} = props;
  return (
    <div className={`${typeDevice}-formTask`}>
        formTask
    </div>
  )
}
