import React from 'react'

const UpdateForm = ({updateData, changeHolder, updateTask, cancelUpdate}) => {
    return (
        <div>
            <>
            {/* Update Task */}
            <div className="row">
              <div className="col">
                <input className='form-control form-control-lg' value={updateData && updateData.title} onChange={(e) => changeHolder(e)} />
              </div>
              <div className="col-auto">
                <button className='btn btn-lg btn-success mr-20' onClick={updateTask}>Update</button>
                <button className='btn btn-lg btn-warning' onClick={cancelUpdate}>Cancel</button>
              </div>
            </div>
            <br />
          </>
        </div>
    )
}

export default UpdateForm