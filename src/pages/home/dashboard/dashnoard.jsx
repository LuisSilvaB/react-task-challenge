import React from 'react'
import useAppContext from '../../../hooks/context/useAppContext'

import { STATUS_TASK } from '../../../utils/constantsUtils'
import ListTask from '../../../components/listTask/listTask'

import './desktop-dashboard.css'
import './android-dashboard.css'
import './iphone-dashboard.css'

export default function Dashnoard() {
  const { typeDevice } = useAppContext();

  return (
    <div className={`${typeDevice}-dashboard`}>
      {Object.keys(STATUS_TASK).map((statusKey, key)=>(
        <ListTask key={key} statusKey = {statusKey}/>
      ))}
    </div>
  )
}
