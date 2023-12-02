import React, { useEffect, useState } from 'react'
import { POINT_ESTIMATE } from '../../utils/constantsUtils'
import { useGetUserDataQuery } from '../../hooks/graphql/queries/useGetUsersDataQuery'
import { TASK_TAG } from '../../utils/constantsUtils' 
import { setVarSvg } from '../../utils/svgUtils'
import useAppContext from '../../hooks/context/useAppContext'


import Calendar from 'react-calendar'


import './calendar.css'
import './desktop-options.css'
import './android-options.css'
import './iphone-options.css'

export default function Options(props) {
    const { typeDevice, el, showOption } = props;
    const { data, error, loading } = useGetUserDataQuery();
    const { task, setTask } = useAppContext()
  
    if (showOption === "formEstimate") {
      const svg = setVarSvg("points");
      return (
        <div className={`${typeDevice}-options-container ${typeDevice}-options-container-estimate`}>
          <div className={`${typeDevice}-option`}>
            <p className={`${typeDevice}-bold-L-body`}>Estimate</p>
          </div>
          {Object.keys(POINT_ESTIMATE).map((point, key) => (
            <div className={`${typeDevice}-option`} key={key} onClick={()=>{
              setTask({...task,['pointEstimate']:point})              }}>
              <img src={svg} alt="" />
              <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{POINT_ESTIMATE[point]} Points</p>
            </div>
          ))}
        </div>
      );
    }
  
    if (showOption === "formAssigne") {
      if (loading) return <>loading</>;
      return (
        <div className={`${typeDevice}-options-container ${typeDevice}-options-container-assignee`}>
          <div className={`${typeDevice}-option `}>
            <p className={`${typeDevice}-bold-L-body ${typeDevice}-option-text`}>Assign To...</p>
          </div>
          {data.users.map((user, index) => (
            <div key={index} className={`${typeDevice}-option`} onClick={()=>{setTask({...task, ['assigneeId']:user.id})
            }}>
              <img className={`${typeDevice}-option-img`} src={user.avatar} alt="" />
              <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{user.fullName}</p>
            </div>
          ))}
        </div>
      );
    }
  
    if (showOption === "formLabel") {
      if (loading) return <>loading</>;
      return (
        <div className={`${typeDevice}-options-container ${typeDevice}-options-container-label`}>
          <div className={`${typeDevice}-option `}>
            <p className={`${typeDevice}-bold-L-body ${typeDevice}-option-text`}>Tag Title</p>
          </div>
          {
            TASK_TAG.map((tag, key)=>(
                <div key={key} className={`${typeDevice}-option`}>
                    <input type="checkbox" className={`${typeDevice}-option-input-checkbox`} onChange={()=>{
                      setTask({...task,['tags']:[...task.tags, tag]})
                      console.log(task);
                    }}/>
                    <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{tag}</p>
                </div>
            )
            )
          }
        </div>
      );
    }
  
    if (showOption === "formCalendar") {
        return (
            <div className={`${typeDevice}-options-container-calendar`}>
              <Calendar onChange={(e)=>{
                setTask({...task,['dueDate']:e.toISOString()})
                console.log(task);
                }}/>
            </div>
          );
    }
  }
  
  