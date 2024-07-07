import React from "react";

const ListTask = ({task,index,removeTask,doneTask}) => {
    return <>    
<div className={`list-task m-0 mt-3 w-100 d-flex justify-content-between align-items-center `}>
       
<div className={`w-75 text-start ${task.status ? 'completed' : ''}`}>{task.title}</div>

        <div className="w-25 d-flex  justify-content-end ">
          <button className="dlt-btn p-2 mx-3 " onClick={()=>{doneTask(index)}}> {task.status ? 'Undo' : 'Done'}</button>
          <button className="dlt-btn p-2 m-0" onClick={()=>{removeTask(index)}}>Delete</button>
        </div>
    </div>
    </>
}

export default ListTask