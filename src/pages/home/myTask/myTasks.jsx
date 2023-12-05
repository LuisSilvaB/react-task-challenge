import React from 'react'
import TaskRow from '../../../components/taskRow/taskRow'
import { STATUS_TASK } from '../../../utils/constantsUtils'
import TaskTable from '../../../components/taskTable/taskTable'
import useAppContext from '../../../hooks/context/useAppContext'

import './desktop-myTask.css'
import './android-myTask.css'
import './iphone-myTask.css'
export default function MyTasks() {
  const { typeDevice } = useAppContext(); 

  return (
    <div className={`${typeDevice}-myTasks`}>
      <TaskRow isHeader = {true}/>
      {
        Object.keys(STATUS_TASK).map((statusKey, key)=>(
          <TaskTable key = {key} statusKey = {statusKey}/>
        ))
      }
    </div>
  )
}
