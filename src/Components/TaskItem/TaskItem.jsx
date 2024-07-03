import { useState, useContext } from 'react';
import { IconButton, Stack, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { TaskContext } from '../../context/TaskContext';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CustomText from '../../styled/CustomText/CustomText';
import CustomButton from '../../styled/CustomButton/CustomButton';
import trash from '/trash.svg';
import edit from '/edit.svg';
import './TaskItem.css'

function TaskItem({ task }) {
  const { deleteTask, toggleTask, setTasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleEditOpen = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title: editedTitle, description: editedDescription };
    setTasks(prevTasks => prevTasks.map(t => (t.id === task.id ? updatedTask : t)));
    handleEditClose();
  };

  const isMobile = window.innerWidth <= 850;

  return (
    <>
      <Stack className='taskItem_gral'>
        <li className='taskItem_gral_li'>
          <Stack className='taskItem_gral_container_checked'>
            <IconButton onClick={handleToggle}>
              {task.completed ? <RadioButtonCheckedIcon style={{ color: 'green' }} /> : <RadioButtonUncheckedIcon style={{ color: 'black' }} />}
            </IconButton>
          </Stack>
          <div draggable className='taskItem_gral_container_tasks'>
            <CustomText text={task.title.toUpperCase()} fontSize='30px' fontSizeMobile='20px' textAlignMobile='center' whiteSpace='normal' styles={{justifyContent:'center'}}/>
            <CustomText text={task.description} fontWeight={400} fontWeightMobile={400} fontSize='20px' fontSizeMobile='15px' textAlignMobile='center' whiteSpace='normal' styles={{justifyContent:'center'}} />
          </div>
          <Stack flexDirection={isMobile ? 'column' : 'row'} className='taskItem_gral_container_buttons'>
            <CustomButton onClick={() => deleteTask(task.id)} heightMobile={'60px'} width={'100%'} widthMobile={'100%'} icon={trash} widthIcon='32px' backgroundColor={'#FFF !important'} />
            <CustomButton onClick={handleEditOpen} heightMobile={'60px'} width={'100%'} widthMobile={'100%'} icon={edit} widthIcon='32px' backgroundColor={'#FFF !important'} />
          </Stack>
        </li>
      </Stack>

      <Dialog open={isEditing} onClose={handleEditClose}>
        <DialogTitle textAlign={'center'}>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              inputProps={{
                maxLength:20
              }}
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              inputProps={{
                maxLength:80
              }}
              multiline
              rows={4}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TaskItem;
