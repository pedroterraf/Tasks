import { TaskProvider } from './context/TaskContext.jsx';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes/AppRouter.jsx';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
