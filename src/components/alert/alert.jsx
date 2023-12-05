import React from 'react'
import useAppContext from '../../hooks/context/useAppContext'

import '../alert/alert.css' 

export default function Alert() {
    const { showAlert, messageAlert, typeAlert } = useAppContext()
  return (
    <div className={`${showAlert}`}>
        <div className={`${typeAlert}`}></div>
        <p className={`${typeAlert}-text`}>{messageAlert}</p>
    </div>
  )
}
