import React, {useState} from 'react'
import { TASK_SELECT_OPTIONS } from '../../utils/constantsUtils'
import { setVarSvg } from '../../utils/svgUtils'

import './desktop-selects.css'
import './android-selects.css'
import './iphone-selects.css'
import Select from '../select/select'

export default function Selects(props) {
    const { typeDevice } = props;  
    return (
    <div className={`${typeDevice}-taskSelects`}>
        {
            Object.keys(TASK_SELECT_OPTIONS).map((el, key) => {
                const svg = setVarSvg(el)
                return(
                    <div key = {key}>
                        <Select svg = {svg} el = {el} typeDevice = {typeDevice}/>         
                    </div>
                )
            }
            )
        }
    </div>
  )
}
