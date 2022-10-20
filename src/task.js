const newToDo = (title, description, duedate, priority) => {
    let taskInfo = () => console.log(title, description, duedate, priority);
    return { title, description, duedate, priority, taskInfo };
}

export { newToDo };