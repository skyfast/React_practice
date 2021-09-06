const AddTask = () =>
{
    return (
        <from className='add-from'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time'/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'/>
            </div>

            <input type='submit' value='save task' className='btn btn-block' />
        </from>
    )
}

export default AddTask