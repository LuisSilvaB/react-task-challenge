import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BsFillGridFill, BsList, BsFillPersonFill } from "react-icons/bs";

import ravLogo from '/img/sidebar/ravnLogo.svg'  

import AddButton from '../addButton/addButton';

import './desktop-sidebar.css'
import './android-sidebar.css'
import './iphone-sidebar.css'

export default function SideBar(props) {
  const { isOpen, typeDevice, optionActive, handleOptionClick } = props;

  if (typeDevice === 'iphone') {
    return(
      <div className={`${typeDevice}-sidebar`}>
      <ul className={`${typeDevice}-sidebar__list`}>
      <li className={`${typeDevice}-sidebar__option ${
          optionActive === 'dashboard' ? 'iphone-active' : ''}`}
          onClick={() => handleOptionClick('dashboard')}
        >
          <BsFillGridFill size={25}/>
          <Link to={'/'} className={`sidebar-link ${typeDevice}-regular-S-subhead`}>
            Dashboard
          </Link>
        </li>
        <li className={`${typeDevice}-sidebar__option ${
          optionActive === 'addProject' ? 'iphone-active' : ''}`}
          onClick={() => handleOptionClick('addProject')}>
            <AddButton typeDevice = { typeDevice }/>
            <Link className={`sidebar-link ${typeDevice}-regular-S-subhead`}>
              Add Project
            </Link>
        </li>
        <li className={`${typeDevice}-sidebar__option ${
          optionActive === 'myTask' ? 'iphone-active' : ''}`}
          onClick={() => handleOptionClick('myTask')}
        >
          <BsList size={25}/>
          <Link to = {'/myTasks'} className={`sidebar-link ${typeDevice}-regular-S-subhead`}>
            My Task
          </Link>
        </li>
        <></>
      </ul>
    </div>
    )
  }
  return (
    <div className={`${typeDevice}-sidebar ${isOpen}`}>
      <img className={`${typeDevice}-sidebar__img`} src={ravLogo}/>
      <ul className={`${typeDevice}-sidebar__list`}>
        <Link to={'/'} className={`sidebar-link ${typeDevice}-bold-M-body`}>
        <li className={`${typeDevice}-sidebar__option ${
            optionActive === 'dashboard' ? 'sidebar-active' : ''}`}
            onClick={() => handleOptionClick('dashboard')}
          >
            <BsFillGridFill />
              DASHBOARD
          </li>
          </Link>
          <Link to={'/myTasks'} className={`sidebar-link ${typeDevice}-bold-M-body`}>
              <li className={`${typeDevice}-sidebar__option ${
                optionActive === 'myTask' ? 'sidebar-active' : ''}`}
                onClick={() => handleOptionClick('myTask')}
              >
                <BsList />
                  MY TASK
              </li>
          </Link>
          <Link to={'/profile'} className={`sidebar-link ${typeDevice}-bold-M-body`}>
              <li className={`${typeDevice}-sidebar__option ${
                optionActive === 'profile' ? 'sidebar-active' : ''}`}
                onClick={() => handleOptionClick('profile')}
              >
                <BsFillPersonFill />
                  Profile
              </li>
          </Link>
      </ul>
    </div>
  )
}

SideBar.protoTypes = {
  isOpen: PropTypes.string,
  typeDevice: PropTypes.string,
  optionActive:PropTypes.string, 
  handleOptionClick:PropTypes.func,
}