const newToDo = (title, description, duedate, priority ) => {
    let taskInfo = () => console.log(title, description, duedate, priority);
    return { title, description, duedate, priority, taskInfo };
}

const newProject = (title) => {
    const tasks = [];
    let currentTask = -1;
    return { title, tasks, currentTask };
}

export { newToDo, newProject };