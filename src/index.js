import { newProject } from "./project";
import { newToDo } from "./task";
import { showProjects, showTask, deleteTasks } from "./UI";
import createModal from "./modal";
// const project_btn = document.querySelector('.projectBtn');
const submit_btn = document.querySelector('.submitBtn');
const text_input = document.getElementById('project');
let currentProject_div = document.querySelector('.currentProject');

createModal();

let projects = [
{
  title: 'inbox',
  tasks: []
},
]
let currentInboxToDo = -1;
let currentToDo = -1;
let currentProject = 0;

submit_btn.addEventListener('click', () => {
  projects.push(newProject(text_input.value));
  currentProject++;
  showProjects(projects[currentProject].title, currentProject);
})



const task_btn = document.querySelector('.taskBtn');
const submit2_btn = document.querySelector('.submitBtn2');

const title_input = document.getElementById('title');
const description_input = document.getElementById('description');
const dueDate_input = document.getElementById('dueDate');
const priority_input = document.getElementById('priority');
let project_h1 = document.querySelector('.currentProject');

submit2_btn.addEventListener('click', () => {

  if (project_h1.textContent === 'Inbox') {
    // console.log('estas en Inbox');
    projects[0].tasks.push(newToDo(title_input.value, description_input.value, 
                         dueDate_input.value, priority_input.value));

    currentInboxToDo++;
    let toDo = projects[0].tasks[currentInboxToDo];
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority)
  } else {
    // console.log('estas en: ' + project_h1.textContent);

    let indexOfProject = parseInt(currentProject_div.textContent.charAt(0))
    projects[indexOfProject].tasks.push(newToDo(title_input.value, description_input.value, dueDate_input.value, priority_input.value));
  

    // console.log('index' + indexOfProject);
    // console.log('currenttodo' + currentToDo)
    
    projects[indexOfProject].currentTask++
    // console.log(projects[indexOfProject].currentTask);

    // currentToDo++;

    let toDo = projects[indexOfProject].tasks[projects[indexOfProject].currentTask]
    showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority)
  }

    // currentToDo++;
    // let toDo = projects[0].tasks[currentToDo]
    // showTask(toDo.title, toDo.description, toDo.duedate, toDo.priority)
})

document.getElementById('test').addEventListener('click', () => {
  console.log(projects);
})

const inbox_li = document.querySelector('.inbox')

inbox_li.addEventListener('click', () => {
  currentProject_div.textContent = 'Inbox';
    deleteTasks();
    projects[0].tasks.forEach(task => {
      showTask(task.title, task.description, task.duedate, task.priority);
        // console.log(task.title);
      })
})

export { projects }