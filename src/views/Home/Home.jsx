import { Stack } from "@mui/material";
import TaskForm from "../../Components/TaskForm/TaskForm";
import TaskList from "../../Components/TaskList/TaskList";
import CustomText from "../../styled/CustomText/CustomText";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import task_img from '/tasks.png'
import './Home.css'

const Home = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="Home">
            <Stack marginBottom={'2em'}>
                <CustomText text="TodoApp" color="black" fontSize="80px !important" fontSizeMobile="60px !important" styles={{borderBottom:'1px solid black'}}/>
            </Stack>
            <TaskForm />
            <Stack width={'90%'}>
                {tasks.length > 0 ? 
                    <TaskList />
                :
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <CustomText text="No hay tareas" fontSize="50px" fontSizeMobile="40px" />
                    <img src={task_img} alt="" width={'400px'} style={{maxWidth:'100%'}}/>
                </Stack>
                }
            </Stack>
        </div>
      );
}
 
export default Home;