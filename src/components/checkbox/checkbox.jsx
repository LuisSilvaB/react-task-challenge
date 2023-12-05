import React, {useEffect, useState} from 'react'
import useAppContext from '../../hooks/context/useAppContext';
import { TASK_TAG } from '../../utils/constantsUtils';
export default function Checkbox(props) {
    const { tagKey, activeShadow, setActiveShadow, setTypeLocalOptions } = props; 
    const { typeDevice, setTaskContext, setInfoFormtask, taskContext, infoFormTask } = useAppContext();
    const [ isCheck, setIsCheck ] = useState(false);
    
    useEffect(()=>{
        handleCheckInput(tagKey); 
    },[tagKey])
    
    const handleCheckInput = (tagKey) => {
        if (taskContext.tags.includes(tagKey)) setIsCheck(true); 
    }
    const setTags = (tagKey) => {
        if (isCheck == false) {            
            setTaskContext(prevState => ({
                ...prevState,
                tags: [...new Set([...prevState.tags, tagKey])]
              }));
              setInfoFormtask(prevState => ({
                ...prevState,
                tags: [...new Set([...prevState.tags, TASK_TAG[tagKey]])]
              }));
            }
            else {
                const filteredTasks = taskContext.tags.filter(t => t !== tagKey);
                const filteredInfo = infoFormTask.tags.filter(t => t !== TASK_TAG[tagKey]);
            
                setTaskContext(prev => ({
                    ...prev,
                    tags: filteredTasks
                }));
                setInfoFormtask(prev => ({
                    ...prev,
                    tags: filteredInfo
                   }));
                
            
              }
        }

    return(
        <div className={`${typeDevice}-option`}>
            <input checked = {isCheck} type="checkbox" className={`${typeDevice}-option-input-checkbox`} 
            onClick={()=>{
                if (typeDevice != 'desktop') {
                    setTypeLocalOptions('')
                }
                setTags(tagKey);
                setIsCheck(!isCheck) 
            }}/>
            <p className={`${typeDevice}-regular-M-body ${typeDevice}-option-text`}>{TASK_TAG[tagKey]}</p>
        </div>
    )
}
