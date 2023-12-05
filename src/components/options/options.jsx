import React, { useEffect, useState } from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils'
import { TASK_TAG } from '../../utils/constantsUtils' 
import { getVarObject } from '../../utils/getVarObject'
import { getRandomPhotoUrl } from '../../utils/getRandomPhotoUrl'
import useAppContext from '../../hooks/context/useAppContext'

import PropTypes from 'prop-types'

import { BiSolidPencil, BiSolidTrash  } from "react-icons/bi";

import Calendar from 'react-calendar'

import { useGetUserDataQuery } from '../../hooks/graphql/queries/useGetUsersDataQuery'

import './calendar.css'
import './desktop-options.css'
import './android-options.css'
import './iphone-options.css'
import Checkbox from '../checkbox/checkbox'

export default function Options(props) {
    const { typeLocalOptions, setTypeLocalOptions, activeShadow, setActiveShadow } = props;
    const { taskContext, setTaskContext, infoFormTask, setInfoFormtask, typeDevice, isVisible, setIsVisible, setTypeForm, typeForm } = useAppContext()
    const { data, error, loading } = useGetUserDataQuery();

    if (typeLocalOptions === "pointEstimate") {
      const svg = getVarObject("points");
      return (
        <>
          <div className={`${typeDevice}-options-container ${typeDevice}-options-container-estimate`}>
            <div className={`${typeDevice}-option`}>
              <p className={`${typeDevice}-bold-L-body`}>Estimate</p>
            </div>
            {Object.keys(POINT_ESTIMATE).map((point, key) => (
              <div className={`${typeDevice}-option`} key={key} 
              onClick={()=>{
                setTaskContext({...taskContext,['pointEstimate']:point})
                setInfoFormtask({...infoFormTask, ['pointEstimate']:`${POINT_ESTIMATE[point]} Points` })
                setTypeLocalOptions('')
              }}>
                <img src={svg} alt="" />
                <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{POINT_ESTIMATE[point]} Points</p>
              </div>
            ))}
          </div>
        </>
      );
    }
  
    if (typeLocalOptions === "assigneeId") {
      if (loading) return <>loading</>
      return (
        <div className={`${typeDevice}-options-container ${typeDevice}-options-container-assignee`}>
          <div className={`${typeDevice}-option `}>
            <p className={`${typeDevice}-bold-L-body ${typeDevice}-option-text`}>Assign To...</p>
          </div>
          {data.users.map((user, index) => {
            const randomPhoto = getRandomPhotoUrl();
            return(
              <div key={index} className={`${typeDevice}-option`} onClick={()=>{
                setTaskContext({...taskContext, ['assigneeId']:user.id})
                setInfoFormtask({...infoFormTask, ['assigneeId']:user.fullName,['img']:randomPhoto})
                setTypeLocalOptions('')
              }}>
                <img className={`${typeDevice}-option-img`} src={randomPhoto} alt="" />
                <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{user.fullName}</p>
              </div>
            )
          }
          )}
        </div>
      );
    }
  
    if (typeLocalOptions === "tags") {
      if (loading) return <>loading</>;
      return (
        <div className={`${typeDevice}-options-container ${typeDevice}-options-container-label`}>
          <div className={`${typeDevice}-option`}>
            <p className={`${typeDevice}-bold-L-body ${typeDevice}-option-text`}>Tag Title</p>
          </div>
          {
            Object.keys(TASK_TAG).map((tagKey, key)=>(
                <Checkbox key = {key} tagKey = {tagKey} activeShadow = {activeShadow} setActiveShadow = {setActiveShadow} setTypeLocalOptions = {setTypeLocalOptions}/>  
              )
            )
          }
        </div>
      );
    }
  
    if (typeLocalOptions === "dueDate") {
        return (
            <div className={`${typeDevice}-options-container-calendar`}>
              <Calendar onChange={(e)=>{
                setTaskContext({...taskContext,['dueDate']:e.toISOString()})
                setInfoFormtask({...infoFormTask,['dueDate']:e.toDateString()})
                setTypeLocalOptions('')
                }}/>
            </div>
          );
    }
    if (typeLocalOptions === "cardOptions") {
      const handleTypeFormUpdate = () => {
          typeForm == "" 
          ? setTypeForm("update")
          : setInfoFormtask('')
      }
      const handleTypeFormDelete = () => {
        typeForm == "" 
          ? setTypeForm("delete")
          : setInfoFormtask('')
      }
      return(
        <div className={`${typeDevice}-options-card`}>
          <div className={`${typeDevice}-options-card-container`}>
            <div className={`${typeDevice}-options-card-option`} onClick={()=>{
              setIsVisible(!isVisible); 
              handleTypeFormUpdate(); 
            }}>
              <BiSolidPencil />
              <p className={`${typeDevice}-regular-M-body`}>Edit</p>
            </div>
            <div className={`${typeDevice}-options-card-option`} onClick={()=>{
              setIsVisible(!isVisible); 
              handleTypeFormDelete(); 
            }}>
              <BiSolidTrash />
              <p className={`${typeDevice}-regular-M-body`}>Delete</p>
            </div>
          </div>
        </div>
      )
    }
}
Options.protoTypes = {
    filterResult: PropTypes.object,
    typeDevice: PropTypes.string,
  }