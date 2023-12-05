import React, {useState, useEffect} from 'react';
import { BsCaretDownFill } from "react-icons/bs";
import TaskRow from '../taskRow/taskRow';

import './taskTable.css'

import { useUpdataTaskMutation } from '../../hooks/graphql/mutations/useUpdateTaskMutation.js';

import useAppContext from '../../hooks/context/useAppContext';
import { useGetTasksDataQuery } from '../../hooks/graphql/queries/useGetTasksDataQuery.js'
import { STATUS_TASK } from '../../utils/constantsUtils.js';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export default function TaskTable(props) {
    const { typeDevice, clearStates, setListsToUpdate, listsToUpdate, setTaskContext, taskContext } = useAppContext()
    const { statusKey } = props
    const {updateTask, updateMutationsOptions} = useUpdataTaskMutation();  
    const [ inDrop, setIndrop ] = useState(false); 
    const [ taskinfo, setTaskInfo ] = useState({
      id:'',
      name: '',
      dueDate: '',
      assigneeId:'',
      pointEstimate: '',
      status: '',
      tags: '',
    }); 
    const { data, error, loading } = useGetTasksDataQuery({
        status:statusKey, 
    }); 


    const startDrag = (e, task) => {
      clearStates();
      setListsToUpdate([...listsToUpdate, task.status]); 
      setTaskContext({
          id:task.id,
          name: task.name,
          dueDate: task.dueDate,
          assigneeId: task.assignee.id,
          pointEstimate: task.pointEstimate,
          status: task.status,
          tags: task.tags,
      })
  }    
  const dragOver = (e) => {
      e.preventDefault(); 
  }
  const dragEnd = (e, statusKey) => {
      setTaskContext({...taskContext, ["status"]:statusKey})
      setListsToUpdate([...listsToUpdate, statusKey]); 
      setIndrop(!inDrop)
  }

  useEffect(()=>{
    if(inDrop){
        updateTask({variables:{
            taskContext:taskContext,
        }})
      console.log(console.log(listsToUpdate));
        setListsToUpdate([])
        setIndrop(!inDrop)
    }
},[taskContext])


if (loading) return <Skeleton baseColor='#2C2F33' width={"100%"} height={400}></Skeleton>
return (
    <div className="task-table">
      <div className="task-table__status">
        <BsCaretDownFill className="task-table__status-icon"/>
        <p className={`task-table__status-text ${typeDevice}-bold-L-body`}>
          {STATUS_TASK[statusKey]} ({data.tasks.length})  
        </p>
      </div>
      <div className="task-table__list" onDrop={(e) => {dragEnd(e, statusKey)}} onDragOver={(e)=>{dragOver(e)}}>
        {
            data.tasks.map((task, key)=>{
                return <TaskRow key = {key} task = {task} startDrag = {startDrag} dragEnd = {dragEnd}/>
            })
        }
      </div>

    </div>
  );
}
