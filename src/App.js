import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
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
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

  return (
    <div className="container">
      <Header title="Welcome To Sky's app" >
      </Header>
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask}/> : "No Tasks to show!"}
    </div>
  );
}

export default App;
