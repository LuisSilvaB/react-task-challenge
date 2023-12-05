import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";

import './desktop-button.css'
import './android-button.css'
import './iphone-button.css'

import { POINT_ESTIMATE } from '../../utils/constantsUtils';

import useAppContext from '../../hooks/context/useAppContext'
import { useCreateTaskMutation } from '../../hooks/graphql/mutations/useCreateTaskMutation'
import { useUpdataTaskMutation } from '../../hooks/graphql/mutations/useUpdateTaskMutation';
import { useDeleteTaskMutation } from '../../hooks/graphql/mutations/useDeleteTaskMutation';

import Options from '../options/options';
import { filterValuesTags } from '../../utils/filterValuesTags';

export default function Button(props) {
    const { createTask } = useCreateTaskMutation('BACKLOG');
    const { updateTask } = useUpdataTaskMutation();  
    const { deleteTask } = useDeleteTaskMutation(); 
    const { clearStates, setInfoFormtask, taskContext, setTaskContext, typeDevice, isVisible, setIsVisible, typeForm, setTypeForm } = useAppContext(); 
    const { typeButton, typeLocalOptions, setTypeLocalOptions, task } = props; 
    if (typeButton === "close") {
        const handleCloseForm = () => {
            clearStates()
            setIsVisible(!isVisible)
            setTypeForm(""); 
        }
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-cancel`} onClick={()=>{
                handleCloseForm()
                }}>
                 <p>Cancel</p>
            </div>
        )
    }
    if (typeButton === "cardOptionsButton") {
        const handleTypeOptions = () => {
            if (typeLocalOptions === '') setTypeLocalOptions('cardOptions') 
            else setTypeLocalOptions('')
        } 
        const handleStatesContext = () => {
            clearStates(); 
            setTaskContext({
                id:task.id,
                name: task.name,
                dueDate: task.dueDate,
                assigneeId: task.assignee.id,
                pointEstimate: task.pointEstimate,
                status: task.status,
                tags: task.tags,
            })
            setInfoFormtask({
                dueDate: new Date(task.dueDate).toDateString(),
                assigneeId: task.assignee.fullName,
                pointEstimate: POINT_ESTIMATE[task.pointEstimate],
                tags: filterValuesTags(task.tags),
                img:task.assignee.avatar, 
                name: task.name
            })
        }
        return(
            <div className={`${typeDevice}-button `} onClick={()=>{
                handleTypeOptions(); 
                handleStatesContext(); 
                }}>
                <AiOutlineEllipsis className={`${typeDevice}-button-cardoptions`} size={20}/>
                <Options setTypeLocalOptions = {setTypeLocalOptions} typeLocalOptions={typeLocalOptions}/>
            </div>
        )
    }
    if (typeForm == "create") {
        const handleCreateTask = (taskContext) => {
            createTask({variables:{
                taskContext:taskContext
            }})
            clearStates()
            setIsVisible(!isVisible)
            setTypeForm('')
        }
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-create`} onClick={()=>{
                try {
                    handleCreateTask(taskContext)
                } catch (error) {
                    console.error('El error es', error);
                }
            }}
                >
                <p className={`${typeDevice}-button-text`} >Create</p>
            </div>
        )
    }
    if (typeForm == "update") {
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-create`} onClick={()=>{
                updateTask({variables:{
                    taskContext:taskContext
                }})
                clearStates()
                setIsVisible(!isVisible)
                setTypeForm('')
            }}
                >
                <p className={`${typeDevice}-button-text`} >Upadte</p>
            </div>
        )
    }
    if (typeForm == "delete") {
        return(
            <div className={`${typeDevice}-button ${typeDevice}-button-create`} onClick={()=>{
                console.log(taskContext);
                deleteTask({variables:{
                    taskId: {
                        id: taskContext.id
                    }
                }})
                clearStates()
                setIsVisible(!isVisible)
                setTypeForm('')
            }}
                >
                <p className={`${typeDevice}-button-text`} >Delete</p>
            </div>
        )
    }
}
