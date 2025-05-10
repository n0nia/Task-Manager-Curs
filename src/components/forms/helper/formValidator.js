export const validateForm = (taskName, dueDate, taskDetails) => {
    let taskNameErrorMessage = "";
    let dueDateErrorMessage = "";
    let taskDetailsErrorMessage = "";
    let isFormValid = true;

    if(taskName.length == 0) {
        taskNameErrorMessage = "This field is Required!";
        isFormValid = false;
    }
    else if(taskName.length <= 3) {
        taskNameErrorMessage = "Task name should have at least 3 characters!";
        isFormValid = false;
    }

    
    if(dueDate.length == 0) {
        dueDateErrorMessage = "Task field is Required!";
        isFormValid = false;
    }
    else if(new Date(dueDate).getTime() < new Date().getTime()) {
        dueDateErrorMessage = "Task due time cannot be less than current date!";
        isFormValid = false;
    }


    if(taskDetails.length == 0) {
        taskDetailsErrorMessage = "This field is Required!";
        isFormValid = false;
    }
    else if(taskDetails.length <= 10) {
        taskDetailsErrorMessage = "Task details should have at least 10 characters!";
        isFormValid = false;
    }

    return {
        taskName: taskNameErrorMessage,
        dueDate: dueDateErrorMessage,
        taskDetails: taskDetailsErrorMessage,
        isValid: isFormValid
    };
}