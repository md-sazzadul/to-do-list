import React from 'react'

const AddTaskForm = ({newTask, setNewTask, addTask}) => {
    return (
        <div>
            <>
            {/* Add Task */}
            <div className="row">
              <div className="col">
              <input
                className='form-control form-control-lg'
                value={newTask}
              onChange={(e) => setNewTask(e.target.value)} />
              </div>
              <div className="col-auto">
              <button
                className='btn btn-lg btn-success'
                onClick={addTask}>
                Add Task
              </button>
              </div>
            </div>
            <br />
          </>
        </div>
    )
}

export default AddTaskForm