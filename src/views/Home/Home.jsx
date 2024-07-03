import { Stack } from "@mui/material";
import TaskForm from "../../Components/TaskForm/TaskForm";
import TaskList from "../../Components/TaskList/TaskList";
import CustomText from "../../styled/CustomText/CustomText";
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Stack marginBottom={'2em'}>
                <CustomText text="TodoApp" color="black" fontSize="50px !important" fontSizeMobile="30px !important" styles={{borderBottom:'1px solid black'}}/>
            </Stack>
            <TaskForm />
            <Stack width={'90%'}>
                <TaskList />
            </Stack>
        </div>
      );
}
 
export default Home;