const newProject = (title) => {
    const tasks = [];
    let currentTask = -1;
    return { title, tasks, currentTask };
}

export { newProject };