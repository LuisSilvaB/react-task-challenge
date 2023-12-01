import React, {useState} from 'react'
import { TASK_SELECT_OPTIONS } from '../../utils/constantsUtils';

import './desktop-select.css'
import './android-select.css'
import './iphone-select.css'
import Options from '../options/options';

export default function Select(props) {
    const { typeDevice, svg, el, key } = props
    const [ showOption, setShowOption ] = useState(false);   

  return (
        <div key={key} className={`${typeDevice}-select-container`}>
            <div className={`${typeDevice}-select`} onClick={()=>{console.log('hola');}}>
                <img src={svg} alt="" className={`${typeDevice}-select-img`} />
                <p className={`${typeDevice}-select-text`}>{TASK_SELECT_OPTIONS[el]}</p>
            </div>
            <Options typeDevice = {typeDevice} el = {el} showOption = {showOption}/>
        </div>
  )
}
