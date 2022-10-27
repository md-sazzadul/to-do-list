import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'
import ToDo from './components/ToDo'

function App() {

  // Tasks (YoDo List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false}
  ])

  //Temp State
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // Add Task
  const addTask = () => {
    if(newTask){
      // let num = toDo.length + 1
      // let newEntry = {id: num, title: newTask, status: false}
      // setToDo([...toDo, newEntry])
      setToDo([...toDo, {id: toDo.length + 1, title: newTask, status: false}])
      setNewTask('')
    }
  } 

  // Delete Task
  const deleteTask = id => {
    // let newTasks = toDo.filter( task => task.id !== id )
    setToDo(toDo.filter( task => task.id !== id ))
  }

  // Mark task done or completed
  const markDone = id => {
    // let newTask = toDo.map( task => {
    //   if( task.id === id){
    //     return ({...task, status: !task.status})
    //   }
    //   return task
    // })
    setToDo(toDo.map( task =>
        task.id === id ? ({...task, status: !task.status}) : (task)
      ))
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  // Change task for update
  const changeHolder = e => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false
    // }
    // setUpdateData(newEntry)

    setUpdateData({
      ...updateData,
      title: e.target.value
    })
  }

  // Update Task
  const updateTask = () => {
    // let filterRecords = [...toDo].filter( task => task.id !== updateData.id)
    // let updatedObject = [...filterRecords, updateData]
    // setToDo(updatedObject)

    setToDo([
      ...[...toDo].filter( task => task.id !== updateData.id),
      updateData
    ])
    setUpdateData('')
  }

  return (
    <div className='container App'>
      <br />
      <h2>Your To Do List</h2>
      <br />

      {
        updateData && updateData ? (
          <UpdateForm
            updateData = {updateData}
            changeHolder = {changeHolder}
            updateTask = {updateTask}
            cancelUpdate = {cancelUpdate}> 
          </UpdateForm>
        ) : (
          <AddTaskForm 
            newTask = {newTask}
            setNewTask = {setNewTask}
            addTask = {addTask}
          ></AddTaskForm>
        )
      }

      {/* Display ToDos */}
      {
        toDo && toDo.length ? '' : 'No Tasks'
      }

      <ToDo
        toDo = {toDo}
        markDone = {markDone}
        setUpdateData = {setUpdateData}
        deleteTask = {deleteTask}
      ></ToDo>
    </div>
  )
}

export default App
