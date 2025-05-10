import React from "react"; 
import "./EmptyListMessage.css";
import tasksIcon from "../../assets/icons/task-icon.png";

const EmptyListMessage = (props) => {
    return (
        <div className="empty-list-container">
            <div className="empty-list-message">
                <img className="tasks-logo" alt="icon" src={tasksIcon}/>
                <h3 className="view-title">No Tasks Yet</h3>
                <p className="subtitle">Get productive. Create a Task now.</p>
                <button
                    className="button-primary btn-xl"
                    onClick={() => props.onCreateTaskClick(true)}
                >
                    Create Task
                </button>
            </div>
        </div>
    )
}

export default EmptyListMessage;
