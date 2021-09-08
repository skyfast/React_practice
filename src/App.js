import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState(
    !localStorage.getItem('tasksList') ?
    [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to store',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]
:
JSON.parse(localStorage.getItem('tasksList'))
)

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() *1000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}

localStorage.setItem('tasksList', JSON.stringify(tasks))


  return (
    <div className="container">
      <Header title="How do you do?" className='header' show={showForm} onAdd ={ () => setShowForm(!showForm) } >
      </Header>
      {showForm &&<AddTask onAdd={addTask}/> }
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/> : "No Tasks to show!"}
    </div>
  );
}

export default App;
