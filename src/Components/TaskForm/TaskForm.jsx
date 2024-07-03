import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Stack } from '@mui/material';
import CustomButton from '../../styled/CustomButton/CustomButton.jsx';
import CustomTextField from '../../styled/CustomTextField/CustomTextField.jsx';
import arrow from '/arrowNext.svg'
import './TaskForm.css'

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      addTask({ id: Date.now(), title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  const validation = () => {
    if (title.trim() && description.trim()) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form className='taskForm_gral'>
        <Stack className='taskForm_gral_container'>
          <Stack gap={'1em'}>
            <CustomTextField 
                label="Title" 
                type="text"
                width='300px'
                checked={title.length > 0 ? true : false}
                widthMobile='300px'
                value={title.toUpperCase()}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={30}
            />
            <CustomTextField
                label="Description" 
                type="text"
                width='300px'
                checked={description.length > 0 ? true : false}
                widthMobile='300px'
                multiline={true}
                value={description}
                maxLength={80}
                onChange={(e) => setDescription(e.target.value)}
            />
          </Stack>
          <CustomButton text='Send' width={'100%'} widthMobile={'100%'} icon={arrow} onClick={() => handleSubmit()} disabled={!validation()} />
        </Stack>
    </form>
  );
}

export default TaskForm;
