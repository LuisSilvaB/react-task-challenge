import React, { useContext, useEffect, useState } from 'react'
import useAppContext from '../../hooks/context/useAppContext'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { TbAlarm } from "react-icons/tb";

import { POINT_ESTIMATE } from '../../utils/constantsUtils'
import { getTimeDiference } from '../../utils/getTimeDiference'
import { getTagOptions } from '../../utils/getTagOptions'

import branchCard from '/img/card/branchCard.svg'
import commentsCard from '/img/card/commentsCard.svg'
import filesCard from '/img/card/filesCard.svg'
import clock from '/img/card/clock.svg'
import Button from '../button/button';

import './desktop-card.css'
import './android-cardTask.css'
import './iphone-Card.css'
import { getRandomPhotoUrl } from '../../utils/getRandomPhotoUrl'


export default function CardTask(props) {
    const { task, startDrag, dragEnd, taskArray } = props
    const [ taskInfo, setTaskInfo ] = useState(false); 
    const [ tempDate, setTempDate ] = useState(''); 
    const [ randomImg, setRandomImg ] = useState(''); 
    const [ typeLocalOptions, setTypeLocalOptions ] = useState(''); 
    const { typeDevice, setListsToUpdate } = useAppContext();     
    useEffect(()=>{
        const dateTaskOptions = getTimeDiference(task.dueDate); 
        const randomPhoto = getRandomPhotoUrl(); 
        setTaskInfo(task)
        setTempDate(dateTaskOptions); 
        setRandomImg(randomPhoto)
    },[task])

    if (!taskInfo) return (
            <SkeletonTheme baseColor='var(--color-neutral-4)'>
                <div className='desktop-card'>
                    <Skeleton/>
                </div>
            </SkeletonTheme>
        )

    return (
    <div className={`${typeDevice}-card`} draggable onDragStart={(e) => {
            setListsToUpdate([""]); 
            startDrag(e, task)
        }}>
        <div className={`${typeDevice}-card__header-container`}>
            <p className={`${typeDevice}-card-header-text ${typeDevice}-bold-L-body`}>{taskInfo.name}</p>
            <Button typeButton = {'cardOptionsButton'} task = {task} typeLocalOptions = {typeLocalOptions} setTypeLocalOptions = {setTypeLocalOptions}/>
        </div>
        <div className={`${typeDevice}-card__dots-container`}>
            <p className={`${typeDevice}-card__points ${typeDevice}-bold-M-body`}>{POINT_ESTIMATE[taskInfo.pointEstimate]} Points</p>
            <div className={`tag-date`}>
                <div className={`${tempDate.taskStyleContainer}`}/>
                <TbAlarm className={`${tempDate.tagStyle}`} size={20}/>
                <p 
                className={`${typeDevice}-card__tag-date ${typeDevice}-bold-M-body ${tempDate.tagStyle}`}
                >{tempDate.tagName === 'EARLY' 
                    ? tempDate.date 
                    :  tempDate.tagName === 'YESTERDAY' 
                        ? 'YESTERDAY'
                        : tempDate.tagName === 'TODAY' 
                                ? 'TODAY'
                                :  tempDate.tagName === 'LATE'
                                    ? 'LATE'
                                    : tempDate.date 
                    }
                </p>
            </div>
        </div>
        <div className={`${typeDevice}-card__tags-container`}>
            {taskInfo.tags.map((tagKey, key)=>{
                const tagOptions = getTagOptions(tagKey)
                return(
                    <div key={key} className={`task-tag ${typeDevice}-card__tag `}>
                        <div  className={`${tagOptions.taskStyleContainer} $`}>
                        </div>
                        <p className={`${typeDevice}-bold-M-body ${tagOptions.taskStyle}`}>{tagOptions.taskName}</p>
                    </div>
                )
            })}
        </div>
        <div className={`${typeDevice}-card__fotter `}>
            <div className={`${typeDevice}-card__fotter-user-container`}>
                <img className={`${typeDevice}-card__fotter-user-img`} src={randomImg}/>
                <p className={`${typeDevice}-card__fotter-user-name ${typeDevice}-body-M-body`}>{taskInfo.assignee.fullName}</p>
            </div>
            <div className={`${typeDevice}-card__fotter-info-container`}>
                <img className={`${typeDevice}-card__fotter-info-img`} src={filesCard} alt="filesIcon" />
                <div className={`${typeDevice}-card__fotter-info-branch`}>
                    <p className={`${typeDevice}-regular-M-body`}>5</p>
                    <img className={`${typeDevice}-card__fotter-info-img`} src={branchCard} alt="brachIcon" />
                </div>
                <div className={`${typeDevice}-card__fotter-info-branch`}>
                    <p className={`${typeDevice}-regular-M-body`}>3</p>
                    <img src={commentsCard} alt="commentsIcon" />
                </div>
            </div>
        </div>
    </div>
  )
}
