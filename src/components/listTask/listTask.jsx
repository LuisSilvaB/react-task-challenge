import React, { useEffect, useState } from 'react'

import { STATUS_TASK } from '../../utils/constantsUtils';
import { useGetTasksDataQuery } from '../../hooks/graphql/queries/useGetTasksDataQuery';
import useAppContext from '../../hooks/context/useAppContext';

import CardTask from '../cardTask/cardTask';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import './desktop-listTask.css'
import './android-listTask.css'
import './iphone-listTask.css'
import { useUpdataTaskMutation } from '../../hooks/graphql/mutations/useUpdateTaskMutation';



export default function ListTask(props) {
    const { typeDevice, taskContext, setTaskContext, clearStates, listsToUpdate, setListsToUpdate } = useAppContext(); 
    const { statusKey } = props
    const {updateTask, updateMutationsOptions} = useUpdataTaskMutation(statusKey);    
    const [ inDrop, setIndrop ] = useState(false); 

    const {data, loading, error} = useGetTasksDataQuery({
        "status":statusKey
    })

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
        setIndrop(!inDrop)
        setListsToUpdate([...listsToUpdate, statusKey]); 
    }

    useEffect(()=>{
        if(inDrop){
            updateTask({variables:{
                taskContext:taskContext,
            }})
            setListsToUpdate([])
            setIndrop(!inDrop)
        }
    },[taskContext])
    

    if (loading) return <Skeleton baseColor='#2C2F33' width={"100%"} height={400}></Skeleton>
    return (
            <div className={`${typeDevice}-listTask`} onDrop={(e) => {dragEnd(e, statusKey)}} onDragOver={(e)=>{dragOver(e)}} >
                <p className={`${typeDevice}-bold-L-body`}>{`${STATUS_TASK[statusKey]} (${data.tasks.length})`}</p>
                    {data.tasks.map((task, key)=>{
                        return(<CardTask key = {key} task = {task} startDrag = {startDrag} dragEnd = {dragEnd}/>)
                    }
                )}
            </div>
        )
    }
