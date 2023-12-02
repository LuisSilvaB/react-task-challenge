import React, { useEffect, useState } from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils'
import useAppContext  from '../../hooks/context/useAppContext.js'

import './desktop-options.css'
import './android-options.css'
import './iphone-options.css'
import { setVarSvg } from '../../utils/svgUtils'

export default function Options(props) {
    const { GetAllUsers } =  useAppContext(); 
    const { typeDevice, el, showOption  } = props;
    const { data, error, loading } = GetAllUsers();  
    const { usersData, setUsersData } = useState(); 
    useEffect(()=>{
        console.log(usersData);
    },[usersData])
    if (el === "formEstimate" && showOption) {
        const svg = setVarSvg("points")
        return (
            <div className={`${typeDevice}-options-container`}>
                        <div className={`${typeDevice}-option ${typeDevice}-bold-xL-body`}>Estimate</div>
                    
                {
                    Object.keys(POINT_ESTIMATE).map((point, key) => (
                        <div className={`${typeDevice}-option`} key={key}>
                            <img src={svg} alt="" />
                            <p className={`${typeDevice}-option-text ${typeDevice}-regular-M-body`} >{POINT_ESTIMATE[point]} Points</p>
                        </div>
                    ))
                }
            </div>
        )
    }
    else if (el === "formAssigne" && showOption) {
        if (loading) return <>Is loading</>
        setUsersData(data); 
        return <>{data}</>
    }
    else if (el === "formLabel") {
        return <></>
    }
    else if(el === "formCalendar"){ 
        return <></>
    }
    return <></>
}
