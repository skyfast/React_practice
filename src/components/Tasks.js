import Task from './task'
// List of Tasks
const Tasks = ({tasks, onDelete}) => {
    
    return (
        <>
            {tasks.map((task) => (
             <Task key={task.id} task={task} onDelete={onDelete} />))
             }
        </>
    )
}

export default Tasks

