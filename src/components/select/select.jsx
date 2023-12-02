import React, {useState} from 'react'
import { TASK_SELECT_OPTIONS } from '../../utils/constantsUtils';
import useAppContext  from '../../hooks/context/useAppContext.js'

import './desktop-select.css'
import './android-select.css'
import './iphone-select.css'
import Options from '../options/options';

export default function Select(props) {
    const { typeDevice, svg, el } = props
    const [ showOption, setShowOption ] = useState(false);  
  return (
        <div className={`${typeDevice}-select-container`}>
            <div className={`${typeDevice}-select`}  onClick={()=> {setShowOption(!showOption)}}>
                <img src={svg} alt="" className={`${typeDevice}-select-img`} />
                <p className={`${typeDevice}-select-text`}>{TASK_SELECT_OPTIONS[el]}</p>
            </div>
            <Options typeDevice = {typeDevice} el = {el} showOption = {showOption}/>
        </div>
  )
}
