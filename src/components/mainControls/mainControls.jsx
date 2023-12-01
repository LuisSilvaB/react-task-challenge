import React from 'react'
import { BsPlus } from "react-icons/bs";
import { BsFillGridFill, BsList } from "react-icons/bs";

import './desktop-mainControls.css'
import './android-mainControls.css'
import './iphone-mainControls.css'

import AddButton from '../addButton/addButton';
import SwitchButton from '../switchButton/switchButton';

export default function MainControls(props) {
    const { typeDevice, optionActive, setOptionActive } = props
  return (
    <div className={`${typeDevice}-mainControls`}>
          <SwitchButton typeDevice = {typeDevice} optionActive = { optionActive } setOptionActive = { setOptionActive }/>
          { typeDevice === 'desktop' ? <AddButton typeDevice = { typeDevice }/> : <></>}
    </div>
  )
}
