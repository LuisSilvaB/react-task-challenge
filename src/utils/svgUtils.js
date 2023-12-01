import formEstimate from '/img/taskSelect/formEstimate.svg'
import formAssigne from '/img/taskSelect/formAssigne.svg'
import formLabel from '/img/taskSelect/formLabel.svg'
import formCalendar from '/img/taskSelect/formCalendar.svg'
import points from '/img/option/points.svg'

export const setVarSvg = (key) => {
    switch (key) {
        case "formAssigne":
            return formAssigne;
        case "formEstimate" :
            return formEstimate;
        case "formLabel":
            return formLabel;
        case "formCalendar":
            return formCalendar;
        case "points":
                return points;
        default:
            console.error('Var not found');
            break
        }
    }