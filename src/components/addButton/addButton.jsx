import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import { useCreateTaskMutation } from "../../hooks/graphql/mutations/useCreateTaskMutation"

import './desktop-addButton.css'
import './android-addButton.css'
import './iphone-addButton.css'

import FormTask from '../formTask/formTask';

export default function AddButton(props) {
  const [isVisible, setIsViseble] = useState(false);
  const { typeDevice } = props;
  const { createTask , loading, error, data } = useCreateTaskMutation();  
  return (
    <div className={`${typeDevice}-mainControls__button-add`}>
        {typeDevice === 'iphone'?<BsPlusCircleFill size={30}/>:<BsPlus size={30}/>}
        <FormTask typeDevice = { typeDevice } typeForm = {"create"} createTask = { createTask } isVisible = {isVisible} setIsViseble = {setIsViseble}/>
    </div>
  )
}
AddButton.protoTypes = {
    typeDevice: PropTypes.string,
  }