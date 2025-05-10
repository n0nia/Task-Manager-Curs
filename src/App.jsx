
import React, { useState, createContext } from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';

const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace",
      status: "Todo",
      dueDate: new Date(2022, 5, 28)
    },
    {
      id: "T-2",
      name: "Create a Design System for Enum Workspace",
      status: "In Progress",
      dueDate: new Date(2022, 9, 18)
    },
    {
      id: "T-3",
      name: "Create a Design System for Enum Workspace",
      status: "Completed",
      dueDate: new Date(2022, 2, 21)
    },
    {
      id: "T-4",
      name: "Create a Design System for Enum Workspace",
      status: "Todo",
      dueDate: new Date(2022, 7, 23)
    }
];

export const TodoContext = createContext();

function App() {
  

  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    setTaskList((previousState) => [
      ...previousState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + previousState.length + 1,
      }
    ])
  }

  return (
    <div className="app-container">
      <div className='app-content'>
        <TodoContext.Provider value={taskList}>
          <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList={taskList}/>
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
