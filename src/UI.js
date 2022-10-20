import { projects } from ".";

const content_div = document.querySelector('.content');

const showTask = (title, description, duedate, priority) => {
    let row_div = document.createElement('div');
    row_div.classList.add('row');
    content_div.appendChild(row_div);


    let left_div = document.createElement('div');
    left_div.classList.add('left');
    row_div.appendChild(left_div);


    let header_h2 = document.createElement('h2');
    header_h2.textContent = title
    left_div.appendChild(header_h2);

    let description_p = document.createElement('p');
    description_p.textContent = description;
    left_div.appendChild(description_p);


    let right_div = document.createElement('div');
    right_div.classList.add('right');
    row_div.appendChild(right_div);

    let priority_p = document.createElement('p');
    priority_p.textContent =  priority;
    right_div.appendChild(priority_p);

    let date_p = document.createElement('p');
    date_p.textContent = duedate;
    right_div.appendChild(date_p);

    let checkbox_inp = document.createElement('input');
    checkbox_inp.type = 'checkbox';
    right_div.appendChild(checkbox_inp);

    let delete_btn = document.createElement('button');
    delete_btn.textContent = 'Delete';
    right_div.appendChild(delete_btn);
}

const projects_ul = document.querySelector('.projectsUl');

const showProjects = (projectName, number) => {
    let project_li = document.createElement('li')
    project_li.setAttribute('id', 'projectTitle');
    project_li.textContent = number + ' ' + projectName;
    projects_ul.appendChild(project_li);

    let currentProject_div = document.querySelector('.currentProject');

    project_li.addEventListener('click', () => {
        deleteTasks()
        currentProject_div.textContent = number + ' ' + projectName;

        let indexOfProject = parseInt(project_li.textContent.charAt(0));
        // console.log(projects);
        projects[indexOfProject].tasks.forEach(task => {
            // console.log(task)
            showTask(task.title, task.descriptio, task.duedate, task.priority);
        })
    })
}


const deleteTasks = () => {
    let allRows = document.querySelectorAll('.row')
    allRows.forEach(row => { 
        row.remove()
    })
}


export { showTask, showProjects, deleteTasks };