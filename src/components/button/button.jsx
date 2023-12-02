import React from 'react'

import './desktop-button.css'
import './android-button.css'
import './iphone-button.css'
import useAppContext from '../../hooks/context/useAppContext'
import { useCreateTaskMutation } from '../../hooks/graphql/mutations/useCreateTaskMutation'

export default function Button(props) {
    const [createTask , {loading, error, data} ] = useCreateTaskMutation()
    const {functionButton, task, typeButton, typeDevice, isVisible} = props; 
    
    if (typeButton === "close") {
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-cancel`} onClick={()=>{functionButton(!isVisible)}}>
                 <p>Cancel</p>
            </div>
        )
    }
    if (typeButton === "submit") {
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-create`} onClick={()=>{
                console.log(task);
                createTask({variables:{
                    task
                }})}}>
                <p className={`${typeDevice}-button-text`} >Create</p>
            </div>
        )
    }
}
