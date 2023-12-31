import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import { useCreateTaskMutation } from "../../hooks/graphql/mutations/useCreateTaskMutation"

import './desktop-addButton.css'
import './android-addButton.css'
import './iphone-addButton.css'

import FormTask from '../formTask/formTask';
import useAppContext from '../../hooks/context/useAppContext';

export default function AddButton() {
  const {typeDevice, setIsVisible, isVisible, setTypeForm, typeForm, clearStates} = useAppContext()
  const handleTypeForm = () => {
    clearStates(); 
    typeForm == "" 
    ? setTypeForm("create")
    : setTypeForm("")
}
  return (
    <div className={`${typeDevice}-mainControls__button-add`} onClick={()=>{
      handleTypeForm();  
      setIsVisible(!isVisible); 
      }}>
        {typeDevice === 'iphone'?<BsPlusCircleFill size={30}/>:<BsPlus size={30}/>}
    </div>
  )
}
AddButton.protoTypes = {
    typeDevice: PropTypes.string,
  }