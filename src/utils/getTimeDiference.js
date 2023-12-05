export const getTimeDiference = (targetTime) => {
    const currentDate = new Date(); 
    const convertDate = new Date(targetTime); 

    const options = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric', 
    }

    const timeDiference = convertDate - currentDate; 
    const daysDiference = (timeDiference/(1000 * 24 * 60 * 60)).toFixed(1);  
    if ( daysDiference <= -2 ) {
        return {
            
            date: convertDate.toLocaleDateString('en-US', options),
            tagName:"LATE", 
            tagStyle: 'late-tagDate',
            taskStyleContainer:'late-tagDate-container' 
        }
    }
    else if ( -1 < daysDiference <= 0) {
        return {
            date: convertDate.toLocaleDateString('en-US', options),
            tagName:"YESTERDAY", 
            tagStyle: 'yesterday-tagDate',
            taskStyleContainer:'yesterday-tagDate-container' 
        }
    }
    else if (0 < daysDiference < 1){
        return {
            date: convertDate.toLocaleDateString('en-US', options),
            tagName:'TODAY', 
            tagStyle: 'today-tagDate',
            taskStyleContainer:'today-tagDate-container' 
        }
    }
    else {
        return{
            date: convertDate.toLocaleDateString('en-US', options),
            tagName:'EARLY', 
            tagStyle:'early-tagTask',
            taskStyleContainer:'early-tagDate-container' 
        }
    }
}