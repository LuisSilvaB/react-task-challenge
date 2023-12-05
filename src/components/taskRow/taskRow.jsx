import React, { useState, useEffect } from 'react';
import useAppContext from '../../hooks/context/useAppContext';
import { getRandomPhotoUrl } from '../../utils/getRandomPhotoUrl';

import './taskRow.css'

import { TASK_TAG } from '../../utils/constantsUtils';
import { POINT_ESTIMATE } from '../../utils/constantsUtils';
import { getTimeDiference } from '../../utils/getTimeDiference';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { getTagOptions } from '../../utils/getTagOptions';

export default function TaskRow(props) {
  const { typeDevice, setListsToUpdate } = useAppContext()
  const { task, isHeader, startDrag, dragEnd } = props;
  const [ taskInfo, setTaskInfo ] = useState(false)
  const [ taskDate, setTaskDate ] = useState('')
  const [ randomImg, setRandomImg ] = useState('');
  const [ tagOptions, setTagOptions ] = useState('') 
  
  useEffect(() => {
    const randomPhoto = getRandomPhotoUrl(); 
    setRandomImg(randomPhoto); 
    if (task != undefined) {      
      setTaskInfo(task)
      const dateTaskOptions = getTimeDiference(task.dueDate); 
      const tagOptionsEffect = getTagOptions(task.tags[0])
      setTaskDate(dateTaskOptions)
      setTagOptions(tagOptionsEffect)
    }
  }, [task]);

  if (isHeader) return (
    <div className="task-row" >
      <div className="task-row__name">
          <p className={`task-row__name-text ${typeDevice}-regular-M-body`}>{"# Task Name"}</p>
      </div>
      <div className='task-row__tags'>
          <p className={`${typeDevice}-regular-M-body `}> Task Tags </p> 
      </div>

      <div className="task-row__estimate">
        <p className={`task-row__estimate-text ${typeDevice}-regular-M-body`}>Estimate</p>
      </div>

      <div className="task-row__assignee">
        <p className={`task-row__assignee-name ${typeDevice}-regular-M-body`}>Task Assignee Name</p>
      </div>
        <div className="tag-date task-row__due-date">
          <p className={`task-row__due-date-text ${typeDevice}-regular-M-body`}>
            Due Date
          </p>
        </div>
      </div>

  )

  if (!taskInfo) return (
    <SkeletonTheme baseColor='var(--color-neutral-4)'>
        <div className='desktop-card'>
            <Skeleton/>
        </div>
    </SkeletonTheme>
)

  return (
    <div className="task-row" draggable onDragStart={(e) => {
      setListsToUpdate([""]);   
      console.log('drag');
      startDrag(e,task)
        }}>
        <div className={`${tagOptions.taskStyle} task-row-color`} />
      <div className=''/>
      <div className="task-row__name">
        { taskInfo ? (
            <>
              <p className={`task-row__name-text ${typeDevice}-regular-M-body`}>{taskInfo.position.toString().padStart(2, '0')}</p>
              <p className={`task-row__name-text ${typeDevice}-regular-M-body`}>{taskInfo.name || "Task"}</p>
            </>
        ):
             <p className={`task-row__name-text ${typeDevice}-regular-M-body`}>{"# Task Name"}</p>
        }
      </div>
      <div className='task-row__tags'>
        <div className={`task-tag`}>
          <div  className={`${tagOptions.taskStyleContainer} $`}/>
          <p className={`${typeDevice}-regular-M-body ${tagOptions.taskStyle}`}>{TASK_TAG[taskInfo.tags[0]]}</p>  
        </div>
          <p className={`${typeDevice}-regular-M-body task-row__tags-text`}>+ {taskInfo.tags.length}</p>
      </div>

      <div className="task-row__estimate">
        <p className={`task-row__estimate-text ${typeDevice}-regular-M-body`}>{POINT_ESTIMATE[taskInfo.pointEstimate]} Points</p>
      </div>

      <div className="task-row__assignee">
        <img className="task-row__assignee-image" src={randomImg}/>
        <p className={`task-row__assignee-name ${typeDevice}-regular-M-body`}>{taskInfo.assignee.fullName}</p>
      </div>

        <div className="tag-date task-row__due-date">
          <div className={`${taskDate.taskStyleContainer} `}/>
          <p className={`task-row__due-date-text ${typeDevice}-regular-M-body ${taskDate.tagStyle}`}>
            {taskDate.tagName === 'EARLY' 
                    ? taskDate.date 
                    :  taskDate.tagName === 'YESTERDAY' 
                        ? 'YESTERDAY'
                        : taskDate.tagName === 'TODAY' 
                                ? 'TODAY'
                                :  taskDate.tagName === 'LATE'
                                    ? 'LATE'
                                    : taskDate.date 
                    }
            </p>
        </div>
      </div>

  );
}
