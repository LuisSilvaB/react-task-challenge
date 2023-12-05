import { TASK_TAG } from "./constantsUtils"
export const filterValuesTags = (keysTasg) => { 
    const taskValues = []; 
    keysTasg.forEach(keyTag => {
        if(keyTag in TASK_TAG) taskValues.push(TASK_TAG[keyTag]); 
    })
    return taskValues; 
}