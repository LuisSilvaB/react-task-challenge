import React from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils'

import './desktop-options.css'
import './android-options.css'
import './iphone-options.css'

export default function Options(props) {
    const { typeDevice, el, showOption  } = props; 
    if (el === "formEstimate" && showOption) {
        Object.keys(POINT_ESTIMATE).map((el, key)=>{
            <div key={key}>{el}</div>
        })
        return <></>
    }
    else if (el === "formAssigne") {
        return <></>
    }
    else if (el === "formLabel") {
        return <></>
    }
    else if(el === "formCalendar"){ 
        return <></>
    }
}
