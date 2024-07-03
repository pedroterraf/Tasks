import { useState, useContext } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskContext } from '../../context/TaskContext';
import { Autocomplete, TextField, Stack } from '@mui/material';
import './TaskList.css'

const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');
  const [options] = useState([
    { title: 'All' },
    { title: 'Completed' },
    { title: 'Pending' }
  ]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleFilterChange = (event, value) => {
    if (value) {
      setFilter(value.title.toLowerCase());
    } else {
      setFilter('all');
    }
  };

  return (
    <div>
        <Stack className='taskList_gral'>
            <Autocomplete
              id="filter"
              options={options}
              defaultValue={options[0]}
              getOptionLabel={(option) => option.title}
              onChange={handleFilterChange}
              renderInput={(params) => <TextField {...params} label="Filter" />}
              sx={{ width: 300}}
              clearIcon={false}
            />
        </Stack>
        {filteredTasks.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
        />
        ))}
    </div>
  );
};

export default TaskList;
