import React, { useEffect, useState } from 'react';
import './ToDo.css';
import AddTask from './AddTask';
import ListTask from './ListTask';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [duplicate, setDuplicate] = useState('');

  const addTask = (title) => {
    const trimmedTitle = title.trim();
    const isDuplicate = tasks.some(
      (task) => task.title.toLowerCase() === trimmedTitle.toLowerCase()
    );

    if (isDuplicate) {
      setDuplicate('Task already exists');
    } else {
      const newTask = [...tasks, { title: trimmedTitle, status: false }];
      setTasks(newTask);
      setDuplicate('');
    }
  };

  useEffect(() => {
    const count = tasks.filter((item) => item.status === false);
    document.title = `${count.length} pending`;
  }, [tasks]);

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  const doneTask = (index) => {
    const complete = tasks.map((list, i) => {
      if (i === index) {
        return { ...list, status: !list.status };
      }
      return list;
    });

    setTasks(complete);
  };

  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO-APP</div>

        <div className='addtask'>
          <AddTask addTask={addTask} />
          {duplicate && <div className='warning text-danger mt-2'>{duplicate}</div>}
        </div>

        <div className='tasks'>
          {tasks.map((task, index) => (
            <ListTask 
              task={task}
              doneTask={doneTask}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
