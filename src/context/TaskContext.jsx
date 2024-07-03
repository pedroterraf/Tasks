import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Cargar las tareas del localStorage al montar el componente
  const loadStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(storedTasks || []); // si no hay tareas almacenadas === []
  };

  // Guardar las tareas en el localStorage cada vez que cambien
  const saveStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Guardar tareas en el estado tasks
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveStorage(updatedTasks);
  };

  // Eliminar tareas del estado tasks
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); //Filtro todas las tareas que sean diferentes al id que quiero borrar
    setTasks(updatedTasks);
    saveStorage(updatedTasks);
  };

  // Filtro de tareas compleatadas o pendientes
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveStorage(updatedTasks);
  };

  // Guardar tareas en el estado tasks
  const updateTask = (id, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
    saveStorage(updatedTasks);
  };

  useEffect(() => {
    if (tasks.length) {
      saveStorage(tasks); //Si hay tareas en el estado, cargarlas
    } else {
      saveStorage(JSON.parse(localStorage.getItem('tasks'))); //Si no hay tareas en el estado, busca en el localStorage
    }
  },[tasks])

  useEffect(() => {
    loadStorage(); // Cargar las tareas al montar el componente
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, deleteTask, toggleTask, loadStorage, saveStorage, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
