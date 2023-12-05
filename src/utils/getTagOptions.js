import { TASK_TAG } from "./constantsUtils"
export const getTagOptions = (taskKey) =>{
    if (taskKey === 'REACT') {
        return{
            taskName: TASK_TAG[taskKey],
            taskStyle: 'react-tag', 
            taskStyleContainer:'react-tag-container'
        }
    }
    if (taskKey === 'NODE_JS') {
        return{
            taskName: TASK_TAG[taskKey],
            taskStyle: 'node-tag',
            taskStyleContainer:'node-tag-container'
        }
    }
    if (taskKey === 'RAILS') {
        return{
            taskName: TASK_TAG[taskKey],
            taskStyle: 'rails-tag',
            taskStyleContainer:'rails-tag-container'
        }
    }
    if (taskKey === 'IOS') {
        return{
            taskName: TASK_TAG[taskKey],
            taskStyle: 'ios-tag', 
            taskStyleContainer:'ios-tag-container'
        }
    }
    if (taskKey === 'ANDROID') {
        return{
            taskName: TASK_TAG[taskKey],
            taskStyle: 'android-tag', 
            taskStyleContainer:'android-tag-container'
        }
    }
}