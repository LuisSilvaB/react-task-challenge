import React from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";

import './desktop-addButton.css'
import './android-addButton.css'
import './iphone-addButton.css'

export default function AddButton(props) {
  const { typeDevice } = props;     
  return (
    <div className={`${typeDevice}-mainControls__button-add`}>
        {typeDevice === 'iphone'?<BsPlusCircleFill size={30}/>:<BsPlus size={30}/>}
    </div>
  )
}
AddButton.protoTypes = {
    typeDevice: PropTypes.string,
  }