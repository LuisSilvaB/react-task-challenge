import React, {useEffect, useState} from 'react'
import { TASK_SELECT_OPTIONS } from '../../utils/constantsUtils'
import { getVarObject } from '../../utils/getVarObject'
import './desktop-selects.css'
import './android-selects.css'
import './iphone-selects.css'
import Select from '../select/select'
import useAppContext from '../../hooks/context/useAppContext'

export default function Selects(props) {
    const { typeDevice } = useAppContext();  
    const { setActiveShadow, activeShadow } = props; 
    return (
    <div className={`${typeDevice}-taskSelects`}>
        {
            Object.keys(TASK_SELECT_OPTIONS).map((el, key) => {
                const svg = getVarObject(el); 
                return(
                    <Select key = {key} svg = {svg} el = {el} typeDevice = {typeDevice} setActiveShadow = {setActiveShadow}  activeShadow = {activeShadow}/>         
                )
            }
            )
        }
    </div>
  )
}
