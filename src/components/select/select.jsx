import React, {useEffect, useState} from 'react'
import { TASK_SELECT_OPTIONS } from '../../utils/constantsUtils';
import { getTagOptions } from '../../utils/getTagOptions.js'
import useAppContext from '../../hooks/context/useAppContext';

import './desktop-select.css'
import './android-select.css'
import './iphone-select.css'
import Options from '../options/options';

export default function Select(props) {
    const { typeDevice, svg, el, setActiveShadow, activeShadow} = props; 
    const { infoFormTask, taskContext } = useAppContext() 
    const [ typeLocalOptions, setTypeLocalOptions ] = useState('');  
    const handleShowOption = (typeLocalOptions, el) => {
        if (typeLocalOptions === el ) setTypeLocalOptions("")
        else setTypeLocalOptions(el)
    }
    const showTags = () => {
      if (typeDevice != 'desktop') {
        return (
          <div className='task-tag-select-container'>
            {taskContext.tags.map( (tagKey, key) => {
              const getTagOption = getTagOptions(tagKey); 
              return (
                <div key={key} className='task-tag-select'>
                  <div className={`${getTagOption.taskStyleContainer}`} />
                    <p className={`${getTagOption.taskStyle}`}>{getTagOption.taskName}</p>
                </div>
              )
            }
            )}
          </div>
        );
      }
    
      return null;
    }
  return (
    <div className={`${typeDevice}-select-container`}>

        <div className={`${typeDevice}-select`} onClick={() => 
          {
            handleShowOption(typeLocalOptions, el)
          }
          }>

        {el === 'assigneeId' && (
          <>
            {infoFormTask['img'] != '' ? (
              <img src={infoFormTask['img']} alt="" className={`${typeDevice}-select-img`}  
              />
            ) : (
              <img src={svg} alt="" className={`${typeDevice}-select-img`}  
              />
            )}
          </>
        )}

        {el !== 'assigneeId' && ( <img src={svg} alt="" className={`${typeDevice}-select-img`} />)}

          <p className={`${typeDevice}-select-text name`}>
              {infoFormTask[el] != '' 
                  ? (Array.isArray(infoFormTask[el])
                  ? `${infoFormTask[el][0]} (${infoFormTask[el].length})`
                      : infoFormTask[el]) 
                          : (TASK_SELECT_OPTIONS[el])}
          </p>
          
      </div>

      <Options typeDevice={typeDevice} el={el} typeLocalOptions={typeLocalOptions} setTypeLocalOptions={setTypeLocalOptions} activeShadow = {activeShadow} setActiveShadow = {setActiveShadow} />
      { el == "tags" ? showTags() : <></>
      }
    </div>
  )
}
