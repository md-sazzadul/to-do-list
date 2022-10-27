import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPenSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({toDo, markDone, setUpdateData, deleteTask}) => {
    return (
        <div>
            {
                toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map( (task, index) => {
                    return(
                    <React.Fragment key={task.id}>
                        <div className='col rounded mb-4 py-2 px-4 text-start fs-4 position-relative taskBg'>
                            <div className={task.status ? 'd-flex align-items-center done' : 'd-flex align-items-center'}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.title}</span>
                            </div>
                            <div className="d-flex align-items-center iconsWrap">
                                <span title='Completed/ Not Completed' onClick={(e) => markDone(task.id)}>
                                <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                                </span>
                            
                                {task.status ? null : (
                                <span title='Edit'
                                        onClick={ () => setUpdateData(task)}>
                                    <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
                                </span>
                                )}

                                <span title='Delete' onClick={() => deleteTask(task.id)}>
                                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ToDo