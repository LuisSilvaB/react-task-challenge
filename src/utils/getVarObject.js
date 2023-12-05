import pointEstimate from '/img/taskSelect/pointEstimate.svg'
import assigneeId from '/img/taskSelect/assigneeId.svg'
import tags from '/img/taskSelect/tags.svg'
import dueDate from '/img/taskSelect/dueDate.svg'
import points from '/img/option/points.svg'

export const getVarObject = (key) => {
    switch (key) {
        case "assigneeId":
            return assigneeId;
        case "pointEstimate" :
            return pointEstimate;
        case "tags":
            return tags;
        case "dueDate":
            return dueDate;
        case "points":
                return points;
        default:
            console.error('Var not found');
            break
        }
    }